import { ClientDuplexStream } from 'grpc';
import { AssistantLanguage } from './common';
import { Conversation } from './conversation';
import { AssistRequest, AssistResponse, AudioInConfig, AudioOutConfig } from './proto';

export class AudioConversation extends Conversation {
  constructor(
    _stream: ClientDuplexStream<AssistRequest, AssistResponse>,
    _deviceId: string,
    _deviceModelId: string,
    locale: AssistantLanguage,
    audioInConfig: AudioInConfig,
    audioOutConfig: AudioOutConfig,
  ) {
    super(_stream, _deviceId, _deviceModelId, locale);
    this.sendRequest({
      audioInConfig,
      audioOutConfig,
      deviceId: _deviceId,
      deviceModelId: _deviceModelId,
      isNewConversation: true,
      locale,
    });
  }

  public send(audio: Buffer): boolean {
    return this.sendRequest({ audio });
  }
}
