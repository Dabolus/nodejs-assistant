import * as grpc from 'grpc';
import { JWTInput, UserRefreshClient } from 'google-auth-library';
import { embeddedAssistantPb } from './proto';
import { Conversation } from './conversation';

export interface GoogleAssistantOptions {
  locale?: string;
  deviceModelId: string;
  deviceInstanceId: string;
}

export interface AssistantResponse {
  deviceAction?: any;
  text?: string;
}

export class Assistant {
  private _endpoint = 'embeddedassistant.googleapis.com';
  private _client: any;
  public locale = 'en-US';
  public deviceModelId = 'default';
  public deviceInstanceId = 'default';

  constructor(credentials: JWTInput, options: GoogleAssistantOptions = {
    locale: 'en-US',
    deviceModelId: 'default',
    deviceInstanceId: 'default',
  }) {
    this.locale = options.locale;
    this.deviceModelId = options.deviceModelId;
    this.deviceInstanceId = options.deviceInstanceId;
    this._client = this._createClient(credentials);
  }

  private _createClient(credentials: JWTInput) {
    const sslCreds = grpc.credentials.createSsl();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(credentials);
    const callCreds = grpc.credentials.createFromGoogleCredential(refresh);
    const combinedCreds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds);
    const client = new embeddedAssistantPb.EmbeddedAssistant(this._endpoint, combinedCreds);
    return client;
  }

  startConversation() {
    return new Conversation(
      this._client.assist(),
      this.deviceModelId,
      this.deviceInstanceId,
      this.locale,
    );
  }

  assist(input: string): Promise<AssistantResponse> {
    const config = new embeddedAssistantPb.AssistConfig();
    config.setTextQuery(input);
    config.setAudioOutConfig(new embeddedAssistantPb.AudioOutConfig());
    config.getAudioOutConfig().setEncoding(1);
    config.getAudioOutConfig().setSampleRateHertz(16000);
    config.getAudioOutConfig().setVolumePercentage(100);
    config.setDialogStateIn(new embeddedAssistantPb.DialogStateIn());
    config.setDeviceConfig(new embeddedAssistantPb.DeviceConfig());
    config.getDialogStateIn().setLanguageCode(this.locale);
    config.getDeviceConfig().setDeviceModelId(this.deviceModelId);
    config.getDeviceConfig().setDeviceId(this.deviceInstanceId);
    const request = new embeddedAssistantPb.AssistRequest();
    request.setConfig(config);

    delete request.audio_in;
    const conversation = this._client.assist();
    return new Promise((resolve, reject) => {
      let response: AssistantResponse = {};
      conversation.on('data', (data: any) => {
        if (data.device_action) {
          response.deviceAction = JSON.parse(data.device_action.device_request_json);
        } else if (data.dialog_state_out !== null && data.dialog_state_out.supplemental_display_text) {
          response.text = data.dialog_state_out.supplemental_display_text;
        }
      });
      conversation.on('end', () => {
          // Response ended, resolve with the whole response.
          resolve(response);
      });
      conversation.on('error', reject);
      conversation.write(request);
      conversation.end();
    });
  }
}
