import { Conversation } from './conversation';
import { AudioOutEncoding } from './proto';

/**
 * Represents a text conversation with the Assistant.
 * @author Giorgio Garasto <giorgio@garasto.it>
 * @license MIT
 * @class
 */
export class TextConversation extends Conversation {
  /**
   * Sends a text query to the Assistant.
   * @param text - The text query to send to the Assistant.
   * @returns A boolean that tells whether the text query was successfully sent or not.
   */
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
