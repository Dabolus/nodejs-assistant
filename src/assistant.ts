import { relative } from 'path';
import * as grpc from 'grpc';
import * as protoFiles from 'google-proto-files';
import { JWTInput, UserRefreshClient } from 'google-auth-library';

const PROTO_ROOT_DIR = protoFiles('..');

const embedded_assistant_pb = grpc.load<any>({
    root: PROTO_ROOT_DIR,
    file: relative(PROTO_ROOT_DIR, protoFiles.embeddedAssistant.v1alpha2)
}).google.assistant.embedded.v1alpha2;

export interface GoogleAssistantOptions {
  locale?: string;
  deviceModelId: string;
  deviceInstanceId: string;
}

export interface AssistantResponse {
  deviceAction?: any;
  text?: string;
}

export class GoogleAssistant {
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
    const client = new embedded_assistant_pb.EmbeddedAssistant(this._endpoint, combinedCreds);
    return client;
  }

    assist(input: string): Promise<AssistantResponse> {
      const config = new embedded_assistant_pb.AssistConfig();
      config.setTextQuery(input);
      config.setAudioOutConfig(new embedded_assistant_pb.AudioOutConfig());
      config.getAudioOutConfig().setEncoding(1);
      config.getAudioOutConfig().setSampleRateHertz(16000);
      config.getAudioOutConfig().setVolumePercentage(100);
      config.setDialogStateIn(new embedded_assistant_pb.DialogStateIn());
      config.setDeviceConfig(new embedded_assistant_pb.DeviceConfig());
      config.getDialogStateIn().setLanguageCode(this.locale);
      config.getDeviceConfig().setDeviceId(this.deviceInstanceId);
      config.getDeviceConfig().setDeviceModelId(this.deviceModelId);
      const request = new embedded_assistant_pb.AssistRequest();
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
