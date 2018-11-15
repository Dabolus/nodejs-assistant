import { JWTInput, UserRefreshClient } from 'google-auth-library';
import * as grpc from 'grpc';
import { AssistantLanguage, AssistantOptions, AssistantResponse } from './common';
import { Conversation } from './conversation';
import {
  AssistResponse,
  AudioOutEncoding,
  EmbeddedAssistant as EmbeddedAssistantInstance,
  embeddedAssistantPbPromise,
} from './proto';

export class Assistant {
  public locale: AssistantLanguage;
  public deviceId: string;
  public deviceModelId: string;
  private _endpoint = 'embeddedassistant.googleapis.com';
  private _clientPromise: Promise<EmbeddedAssistantInstance>;

  constructor(credentials: JWTInput, options: AssistantOptions = {
    deviceId: 'default',
    deviceModelId: 'default',
    locale: AssistantLanguage.ENGLISH,
  }) {
    this.locale = options.locale;
    this.deviceId = options.deviceId;
    this.deviceModelId = options.deviceModelId;
    this._clientPromise = this._createClient(credentials);
  }

  public async startConversation() {
    const client = await this._clientPromise;
    return new Conversation(
      client.assist(),
      this.deviceId,
      this.deviceModelId,
      this.locale,
    );
  }

  public async assist(text: string): Promise<AssistantResponse> {
    const client = await this._clientPromise;
    const conversation = client.assist();
    return new Promise((resolve, reject) => {
      const response: AssistantResponse = {};
      conversation.on('data', (data: AssistResponse) => {
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
          audioOutConfig: {
            encoding: AudioOutEncoding.LINEAR16,
            sampleRateHertz: 16000,
            volumePercentage: 100,
          },
          deviceConfig: {
            deviceId: this.deviceId,
            deviceModelId: this.deviceModelId,
          },
          dialogStateIn: {
            languageCode: this.locale,
          },
          textQuery: text,
        },
      });
      conversation.end();
    });
  }

  private async _createClient(credentials: JWTInput) {
    // tslint:disable-next-line:variable-name
    const EmbeddedAssistant: typeof EmbeddedAssistantInstance = await embeddedAssistantPbPromise;
    const sslCreds = grpc.credentials.createSsl();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(credentials);
    const callCreds = grpc.credentials.createFromGoogleCredential(refresh);
    const combinedCreds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds);
    const client = new EmbeddedAssistant(this._endpoint, combinedCreds);
    return client;
  }
}
