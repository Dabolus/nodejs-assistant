import * as grpc from 'grpc';
import { JWTInput, UserRefreshClient } from 'google-auth-library';
import { embeddedAssistantPbPromise, EmbeddedAssistantPb } from './proto';
import { Conversation } from './conversation';
import { AssistantOptions, AssistantResponse, AssistantLanguage } from './common';

export class Assistant {
  private _endpoint = 'embeddedassistant.googleapis.com';
  private _clientPromise: Promise<EmbeddedAssistantPb.EmbeddedAssistant>;
  public locale: AssistantLanguage;
  public deviceModelId: string;
  public deviceId: string;

  constructor(credentials: JWTInput, options: AssistantOptions = {
    locale: AssistantLanguage.ENGLISH,
    deviceModelId: 'default',
    deviceId: 'default',
  }) {
    this.locale = options.locale;
    this.deviceModelId = options.deviceModelId;
    this.deviceId = options.deviceId;
    this._clientPromise = this._createClient(credentials);
  }

  private async _createClient(credentials: JWTInput) {
    const EmbeddedAssistant = await embeddedAssistantPbPromise;
    const sslCreds = grpc.credentials.createSsl();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(credentials);
    const callCreds = grpc.credentials.createFromGoogleCredential(refresh);
    const combinedCreds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds);
    const client = new EmbeddedAssistant(this._endpoint, combinedCreds);
    return client;
  }

  async startConversation() {
    const client = await this._clientPromise;
    return new Conversation(
      client.assist(),
      this.deviceModelId,
      this.deviceId,
      this.locale,
    );
  }

  async assist(text: string): Promise<AssistantResponse> {
    const client = await this._clientPromise;
    const conversation = client.assist();
    return new Promise((resolve, reject) => {
      let response: AssistantResponse = {};
      conversation.on('data', (data: EmbeddedAssistantPb.AssistResponse) => {
        if (data.deviceAction && data.deviceAction.deviceRequestJson) {
          response.action = JSON.parse(data.deviceAction.deviceRequestJson);
        }
        if (data.audioOut && data.audioOut.audioData) {
          response.audio = response.audio ?
            Buffer.concat([response.audio, data.audioOut.audioData]) :
            data.audioOut.audioData;
        }
        if (data.dialogStateOut && data.dialogStateOut.supplementalDisplayText) {
          response.text = data.dialogStateOut.supplementalDisplayText;
        }
      });
      conversation.on('end', () => {
          // Response ended, resolve with the whole response.
          resolve(response);
      });
      conversation.on('error', reject);
      conversation.write({
        config: {
          textQuery: text,
          audioOutConfig: {
            encoding: EmbeddedAssistantPb.AudioOutEncoding.LINEAR16,
            sampleRateHertz: 16000,
            volumePercentage: 100,
          },
          dialogStateIn: {
            languageCode: this.locale,
          },
          deviceConfig: {
            deviceModelId: this.deviceModelId,
            deviceId: this.deviceId,
          },
        },
      });
      conversation.end();
    });
  }
}
