import { EventEmitter } from 'events';
import { ClientDuplexStream } from 'grpc';
import { AssistantLanguage, mapAssistResponseToAssistantResponse } from './common';
import { AssistRequest, AssistResponse, AudioOutEncoding } from './proto';

export class Conversation extends EventEmitter {
  constructor(
    private _stream: ClientDuplexStream<AssistRequest, AssistResponse>,
    private _deviceId: string,
    private _deviceModelId: string,
    public locale: AssistantLanguage,
  ) {
    super();
    this._setupEvents();
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

  private _setupEvents() {
    this._stream.on('data', (data: AssistResponse) => {
      const mappedResponse = mapAssistResponseToAssistantResponse(data);
      this.emit('data', mappedResponse);
      if (mappedResponse.action) {
        this.emit('action', mappedResponse.action);
      }
      if (mappedResponse.actionOnGoogle) {
        this.emit('actionongoogle', mappedResponse.actionOnGoogle);
      }
      if (mappedResponse.audio) {
        this.emit('audio', mappedResponse.audio);
      }
      if (mappedResponse.conversationEnded) {
        this.emit('conversationend', mappedResponse);
      }
      if (mappedResponse.html) {
        this.emit('html', mappedResponse.html);
      }
      if (mappedResponse.newVolume) {
        this.emit('volume', mappedResponse.newVolume);
      }
      if (mappedResponse.speechRecognitionResults) {
        this.emit('speechrecognition', mappedResponse.speechRecognitionResults);
      }
      if (mappedResponse.text) {
        this.emit('message', mappedResponse.text);
      }
      if (mappedResponse.utteranceEnded) {
        this.emit('utteranceend', mappedResponse);
      }
    });
  }
}
