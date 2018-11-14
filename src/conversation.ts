import { ClientDuplexStream } from 'grpc';
import { AssistantLanguage } from './common';
import { EmbeddedAssistantPb } from './proto';

export class Conversation {
  private _onMessageCallbacks: Function[] = [];

  constructor(
    private _stream: ClientDuplexStream<EmbeddedAssistantPb.AssistRequest, EmbeddedAssistantPb.AssistResponse>,
    private _deviceModelId: string,
    private _deviceId: string,
    public locale: AssistantLanguage,
  ) {
    _stream.on('data', (data: EmbeddedAssistantPb.AssistResponse) => {
      this._onMessageCallbacks.forEach(callback => callback(data));
    });
}

  public onMessage(callback: Function) {
    this._onMessageCallbacks.push(callback);
  }

  public send(text: string) {
    this._stream.write({
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
          deviceModelId: this._deviceModelId,
          deviceId: this._deviceId,
        },
      },
    });
  }
}
