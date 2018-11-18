import { Conversation } from './conversation';
import { AudioOutEncoding } from './proto';

export class TextConversation extends Conversation {
  public send(text: string): boolean {
    return this.sendRequest({
      audioOutConfig: {
        encoding: AudioOutEncoding.LINEAR16,
        sampleRateHertz: 16000,
        volumePercentage: 100,
      },
      deviceId: this._deviceId,
      deviceModelId: this._deviceModelId,
      locale: this.locale,
      text,
    });
  }
}
