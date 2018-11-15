import { ClientDuplexStream } from 'grpc';
import { AssistantLanguage } from './common';
import { AssistRequest, AssistResponse, AudioOutEncoding } from './proto';

export class Conversation {
  private _onMessageCallbacks: Array<(data: AssistResponse) => void> = [];

  constructor(
    private _stream: ClientDuplexStream<AssistRequest, AssistResponse>,
    private _deviceId: string,
    private _deviceModelId: string,
    public locale: AssistantLanguage,
  ) {
    _stream.on('data', (data: AssistResponse) => {
      this._onMessageCallbacks.forEach((callback) => callback(data));
    });
}

  public onMessage(callback: (data: AssistResponse) => void) {
    this._onMessageCallbacks.push(callback);
  }

  public send(text: string) {
    this._stream.write({
      config: {
        audioOutConfig: {
          encoding: AudioOutEncoding.LINEAR16,
          sampleRateHertz: 16000,
          volumePercentage: 100,
        },
        deviceConfig: {
          deviceId: this._deviceId,
          deviceModelId: this._deviceModelId,
        },
        dialogStateIn: {
          languageCode: this.locale,
        },
        textQuery: text,
      },
    });
  }
}
