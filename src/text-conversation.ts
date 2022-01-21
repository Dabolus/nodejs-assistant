import { ClientDuplexStream } from '@grpc/grpc-js';
import { AssistantLanguage } from './common';
import { Conversation } from './conversation';
import {
  AssistRequest,
  AssistResponse,
  AudioOutConfig,
  AudioOutEncoding,
} from './proto';

/**
 * Represents a text conversation with the Assistant.
 * @author Giorgio Garasto <giorgio@garasto.it>
 * @license MIT
 * @class
 */
export class TextConversation extends Conversation {
  /**
   * Creates a new audio conversation.
   * @param _stream - The duplex stream to use to communicate with the Assistant SDK.
   * @param _deviceId - The device ID to use during this conversation.
   * @param _deviceModelId - The device model ID to use during this conversation.
   * @param locale - The locale to use during this conversation.
   * @param _audioOutConfig - The audio output configuration.
   * @constructor
   */
  constructor(
    _stream: ClientDuplexStream<AssistRequest, AssistResponse>,
    _deviceId: string,
    _deviceModelId: string,
    locale: AssistantLanguage,
    private _audioOutConfig: AudioOutConfig = {
      encoding: AudioOutEncoding.LINEAR16,
      sampleRateHertz: 16000,
      volumePercentage: 100,
    },
  ) {
    super(_stream, _deviceId, _deviceModelId, locale);
  }

  /**
   * Sends a text query to the Assistant.
   * @param text - The text query to send to the Assistant.
   * @returns A boolean that tells whether the text query was successfully sent or not.
   */
  public send(text: string): boolean {
    return this.sendRequest({
      audioOutConfig: this._audioOutConfig,
      deviceId: this._deviceId,
      deviceModelId: this._deviceModelId,
      locale: this.locale,
      text,
    });
  }
}
