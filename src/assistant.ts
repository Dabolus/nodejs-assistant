import { JWTInput, UserRefreshClient } from 'google-auth-library';
import * as grpc from 'grpc';
import { AudioConversation } from './audio-conversation';
import { AssistantLanguage, AssistantOptions, AssistantResponse, mapAssistResponseToAssistantResponse } from './common';
import { Conversation } from './conversation';
import {
  AssistResponse,
  AudioInConfig,
  AudioOutConfig,
  AudioOutEncoding,
  EmbeddedAssistant as EmbeddedAssistantInstance,
  embeddedAssistantPb as EmbeddedAssistant,
} from './proto';
import { TextConversation } from './text-conversation';

export class Assistant {
  public locale: AssistantLanguage;
  public deviceId: string;
  public deviceModelId: string;
  private _endpoint = 'embeddedassistant.googleapis.com';
  private _client: EmbeddedAssistantInstance;

  constructor(credentials: JWTInput, options: AssistantOptions = {
    deviceId: 'default',
    deviceModelId: 'default',
    locale: AssistantLanguage.ENGLISH,
  }) {
    this.locale = options.locale;
    this.deviceId = options.deviceId;
    this.deviceModelId = options.deviceModelId;
    this._client = this._createClient(credentials);
  }

  public startTextConversation(): TextConversation {
    return new TextConversation(
      this._client.assist(),
      this.deviceId,
      this.deviceModelId,
      this.locale,
    );
  }

  public startAudioConversation(audioInConfig: AudioInConfig, audioOutConfig: AudioOutConfig): AudioConversation {
    return new AudioConversation(
      this._client.assist(),
      this.deviceId,
      this.deviceModelId,
      this.locale,
      audioInConfig,
      audioOutConfig,
    );
  }

  public query(text: string): Promise<AssistantResponse> {
    const conversation = this._client.assist();
    return new Promise((resolve, reject) => {
      const response: AssistantResponse = {};
      conversation.on('data', (data: AssistResponse) => {
        const mappedData = mapAssistResponseToAssistantResponse(data);
        if (mappedData.action) {
          response.action = {
            ...response.action,
            ...mappedData.action,
          };
        }
        if (mappedData.actionOnGoogle) {
          response.actionOnGoogle = {
            ...response.actionOnGoogle,
            ...mappedData.actionOnGoogle,
          };
        }
        if (mappedData.audio) {
          response.audio = response.audio ?
            Buffer.concat([response.audio, mappedData.audio]) :
            mappedData.audio;
        }
        if (mappedData.html) {
          response.html = response.html ? `${response.html} ${mappedData.html}` : mappedData.html;
        }
        if (mappedData.newVolume) {
          response.newVolume = mappedData.newVolume;
        }
        if (mappedData.speechRecognitionResults) {
          response.speechRecognitionResults =
            [...(response.speechRecognitionResults || []), ...mappedData.speechRecognitionResults];
        }
        if (mappedData.text) {
          response.text = response.text ? `${response.text} ${mappedData.text}` : mappedData.text;
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

  private _createClient(credentials: JWTInput): EmbeddedAssistantInstance {
    const sslCreds = grpc.credentials.createSsl();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(credentials);
    const callCreds = grpc.credentials.createFromGoogleCredential(refresh);
    const combinedCreds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds);
    const client = new EmbeddedAssistant(this._endpoint, combinedCreds);
    return client;
  }
}
