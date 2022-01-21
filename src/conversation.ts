import { EventEmitter } from 'events';
import { ClientDuplexStream } from '@grpc/grpc-js';
import {
  AssistantLanguage,
  AssistantRequest,
  AssistantResponse,
  AssistantSpeechRecognitionResult,
  mapAssistantRequestToAssistRequest,
  mapAssistResponseToAssistantResponse,
} from './common';
import { AssistRequest, AssistResponse } from './proto';

/**
 * Represents a conversation with the Assistant.
 * @author Giorgio Garasto <giorgio@garasto.it>
 * @license MIT
 * @class
 */
export class Conversation extends EventEmitter {
  /**
   * Creates a new conversation.
   * @param _stream - The duplex stream to use to communicate with the Assistant SDK.
   * @param _deviceId - The device ID to use during this conversation.
   * @param _deviceModelId - The device model ID to use during this conversation.
   * @param locale - The locale to use during this conversation.
   * @constructor
   */
  constructor(
    private _stream: ClientDuplexStream<AssistRequest, AssistResponse>,
    protected _deviceId: string,
    protected _deviceModelId: string,
    public locale: AssistantLanguage,
  ) {
    super();
    this._setupEvents();
  }

  public sendRawRequest(rawRequest: AssistRequest): boolean {
    return this._stream.write(rawRequest);
  }

  public sendRequest(request: AssistantRequest): boolean {
    const finalRequest = request.audio
      ? request
      : ({
          deviceId: this._deviceId,
          deviceModelId: this._deviceModelId,
          locale: this.locale,
          ...request,
        } as AssistantRequest);

    return this.sendRawRequest(
      mapAssistantRequestToAssistRequest(finalRequest),
    );
  }

  public end(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._stream.end((err: Error) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  private _setupEvents(): void {
    this._stream
      .on('data', (data: AssistResponse) => {
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
          this.emit(
            'speechrecognition',
            mappedResponse.speechRecognitionResults,
          );
        }
        if (mappedResponse.text) {
          this.emit('message', mappedResponse.text);
        }
        if (mappedResponse.utteranceEnded) {
          this.emit('utteranceend', mappedResponse);
        }
      })
      .on('end', () => this.emit('end'))
      .on('close', () => this.emit('close'))
      .on('error', err => this.emit('error', err));
  }
}

/***** TYPINGS ************************************************************************************/
// The following are just some TypeScript goodies to make it much easier to write code
// for both library users and developers.

export type ConversationEvent =
  | 'data'
  | 'action'
  | 'actionongoogle'
  | 'audio'
  | 'conversationend'
  | 'message'
  | 'html'
  | 'volume'
  | 'speechrecognition'
  | 'utteranceend';

export declare interface Conversation {
  /**
   * Adds an event listener that will be triggered when the Assistant sends any type of data.
   *
   * @param event - The 'data' event.
   * @param listener - A callback that will receive the Assistant data as param.
   * @returns The conversation.
   */
  addListener(event: 'data', listener: (data: AssistantResponse) => void): this;

  /**
   * Adds an event listener that will be triggered if the user has triggered a Device Action.
   * For example, a device which supports the query *Turn on the light* would receive an
   * object containing the semantics of the request.
   *
   * @param event - The 'action' event.
   * @param listener - A callback that will receive the object containing the semantics of the request as param.
   * @returns The conversation.
   */
  addListener(event: 'action', listener: (action: unknown) => void): this;

  /**
   * Adds an event listener that will be triggered with the original response from an
   * Action-on-Google agent to Google server. To be able to receive this data, the conversation
   * has to be in debug mode, the request maker has to own the AoG project and the AoG project
   * has to be in preview mode.
   *
   * @param event - The 'actionongoogle' event.
   * @param listener - A callback that will receive the original response from the AoG agent as param.
   * @returns The conversation.
   */
  addListener(
    event: 'actionongoogle',
    listener: (actionOnGoogle: unknown) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends an audio message.
   *
   * @param event - The 'audio' event.
   * @param listener - A callback that will receive the Assistant audio message as param.
   * @returns The conversation.
   */
  addListener(event: 'audio', listener: (audio: Buffer) => void): this;

  /**
   * Adds an event listener that will be triggered when the conversation with the Assistant ends.
   *
   * @param event - The 'conversationend' event.
   * @param listener - A callback that will receive the latest Assistant response as param.
   * @returns The conversation.
   */
  addListener(
    event: 'conversationend',
    listener: (latestData: AssistantResponse) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends a text message.
   *
   * @param event - The 'message' event.
   * @param listener - A callback that will receive the Assistant text message as param.
   * @returns The conversation.
   */
  addListener(event: 'message', listener: (text: string) => void): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends HTML data.
   *
   * @param event - The 'html' event.
   * @param listener - A callback that will receive the HTML data as param.
   * @returns The conversation.
   */
  addListener(event: 'html', listener: (html: string) => void): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends the new device volume level.
   *
   * @param event - The 'volume' event.
   * @param listener - A callback that will receive the new device volume level as param.
   * @returns The conversation.
   */
  addListener(event: 'volume', listener: (newVolume: number) => void): this;

  /**
   * Adds an event listener that will be triggered with the Assistant speech recognition results.
   *
   * @param event - The 'speechrecognition' event.
   * @param listener - A callback that will receive the Assistant speech recognition results as param.
   * @returns The conversation.
   */
  addListener(
    event: 'speechrecognition',
    listener: (
      speechRecognitionResults: AssistantSpeechRecognitionResult[],
    ) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant detects the end of the user's
   * speech utterance and expects no additional speech. Therefore, it will not process additional audio
   * (although it may subsequently return additional results).
   *
   * @param event - The 'utteranceend' event.
   * @param listener - A callback that will receive the latest Assistant response as param.
   * @returns The conversation.
   */
  addListener(
    event: 'utteranceend',
    listener: (latestData: AssistantResponse) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant closes the connection,
   * thus not sending any more data.
   *
   * @param event - The 'end' event.
   * @param listener - A callback with no params.
   * @returns The conversation.
   */
  addListener(event: 'end', listener: () => void): this;

  /**
   * Adds an event listener that will be triggered when the connection with the Assistant is
   * fully closed.
   *
   * @param event - The 'end' event.
   * @param listener - A callback with no params.
   * @returns The conversation.
   */
  addListener(event: 'close', listener: () => void): this;

  /**
   * Adds an event listener that will be triggered when any type of error occurs.
   *
   * @param event - The 'error' event.
   * @param listener - A callback that will receive the error as param.
   * @returns The conversation.
   */
  addListener(event: 'error', listener: (error: Error) => void): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends any type of data.
   *
   * @param event - The 'data' event.
   * @param listener - A callback that will receive the Assistant data as param.
   * @returns The conversation.
   */
  on(event: 'data', listener: (data: AssistantResponse) => void): this;

  /**
   * Adds an event listener that will be triggered if the user has triggered a Device Action.
   * For example, a device which supports the query *Turn on the light* would receive an
   * object containing the semantics of the request.
   *
   * @param event - The 'action' event.
   * @param listener - A callback that will receive the object containing the semantics of the request as param.
   * @returns The conversation.
   */
  on(event: 'action', listener: (action: unknown) => void): this;

  /**
   * Adds an event listener that will be triggered with the original response from an
   * Action-on-Google agent to Google server. To be able to receive this data, the conversation
   * has to be in debug mode, the request maker has to own the AoG project and the AoG project
   * has to be in preview mode.
   *
   * @param event - The 'actionongoogle' event.
   * @param listener - A callback that will receive the original response from the AoG agent as param.
   * @returns The conversation.
   */
  on(
    event: 'actionongoogle',
    listener: (actionOnGoogle: unknown) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends an audio message.
   *
   * @param event - The 'audio' event.
   * @param listener - A callback that will receive the Assistant audio message as param.
   * @returns The conversation.
   */
  on(event: 'audio', listener: (audio: Buffer) => void): this;

  /**
   * Adds an event listener that will be triggered when the conversation with the Assistant ends.
   *
   * @param event - The 'conversationend' event.
   * @param listener - A callback that will receive the latest Assistant response as param.
   * @returns The conversation.
   */
  on(
    event: 'conversationend',
    listener: (latestData: AssistantResponse) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends a text message.
   *
   * @param event - The 'message' event.
   * @param listener - A callback that will receive the Assistant text message as param.
   * @returns The conversation.
   */
  on(event: 'message', listener: (text: string) => void): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends HTML data.
   *
   * @param event - The 'html' event.
   * @param listener - A callback that will receive the HTML data as param.
   * @returns The conversation.
   */
  on(event: 'html', listener: (html: string) => void): this;

  /**
   * Adds an event listener that will be triggered when the Assistant sends the new device volume level.
   *
   * @param event - The 'volume' event.
   * @param listener - A callback that will receive the new device volume level as param.
   * @returns The conversation.
   */
  on(event: 'volume', listener: (newVolume: number) => void): this;

  /**
   * Adds an event listener that will be triggered with the Assistant speech recognition results.
   *
   * @param event - The 'speechrecognition' event.
   * @param listener - A callback that will receive the Assistant speech recognition results as param.
   * @returns The conversation.
   */
  on(
    event: 'speechrecognition',
    listener: (
      speechRecognitionResults: AssistantSpeechRecognitionResult[],
    ) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant detects the end of the user's
   * speech utterance and expects no additional speech. Therefore, it will not process additional audio
   * (although it may subsequently return additional results).
   *
   * @param event - The 'utteranceend' event.
   * @param listener - A callback that will receive the latest Assistant response as param.
   * @returns The conversation.
   */
  on(
    event: 'utteranceend',
    listener: (latestData: AssistantResponse) => void,
  ): this;

  /**
   * Adds an event listener that will be triggered when the Assistant closes the connection,
   * thus not sending any more data.
   *
   * @param event - The 'end' event.
   * @param listener - A callback with no params.
   * @returns The conversation.
   */
  on(event: 'end', listener: () => void): this;

  /**
   * Adds an event listener that will be triggered when the connection with the Assistant is
   * fully closed.
   *
   * @param event - The 'end' event.
   * @param listener - A callback with no params.
   * @returns The conversation.
   */
  on(event: 'close', listener: () => void): this;

  /**
   * Adds an event listener that will be triggered when any type of error occurs.
   *
   * @param event - The 'error' event.
   * @param listener - A callback that will receive the error as param.
   * @returns The conversation.
   */
  on(event: 'error', listener: (error: Error) => void): this;

  /**
   * Adds a one time event listener that will be triggered when the Assistant sends any type of data.
   *
   * @param event - The 'data' event.
   * @param listener - A callback that will receive the Assistant data as param.
   * @returns The conversation.
   */
  once(event: 'data', listener: (data: AssistantResponse) => void): this;

  /**
   * Adds a one time event listener that will be triggered if the user has triggered a Device Action.
   * For example, a device which supports the query *Turn on the light* would receive an
   * object containing the semantics of the request.
   *
   * @param event - The 'action' event.
   * @param listener - A callback that will receive the object containing the semantics of the request as param.
   * @returns The conversation.
   */
  once(event: 'action', listener: (action: unknown) => void): this;

  /**
   * Adds a one time event listener that will be triggered with the original response from an
   * Action-on-Google agent to Google server. To be able to receive this data, the conversation
   * has to be in debug mode, the request maker has to own the AoG project and the AoG project
   * has to be in preview mode.
   *
   * @param event - The 'actionongoogle' event.
   * @param listener - A callback that will receive the original response from the AoG agent as param.
   * @returns The conversation.
   */
  once(
    event: 'actionongoogle',
    listener: (actionOnGoogle: unknown) => void,
  ): this;

  /**
   * Adds a one time event listener that will be triggered when the Assistant sends an audio message.
   *
   * @param event - The 'audio' event.
   * @param listener - A callback that will receive the Assistant audio message as param.
   * @returns The conversation.
   */
  once(event: 'audio', listener: (audio: Buffer) => void): this;

  /**
   * Adds a one time event listener that will be triggered when the conversation with the Assistant ends.
   *
   * @param event - The 'conversationend' event.
   * @param listener - A callback that will receive the latest Assistant response as param.
   * @returns The conversation.
   */
  once(
    event: 'conversationend',
    listener: (latestData: AssistantResponse) => void,
  ): this;

  /**
   * Adds a one time event listener that will be triggered when the Assistant sends a text message.
   *
   * @param event - The 'message' event.
   * @param listener - A callback that will receive the Assistant text message as param.
   * @returns The conversation.
   */
  once(event: 'message', listener: (text: string) => void): this;

  /**
   * Adds a one time event listener that will be triggered when the Assistant sends HTML data.
   *
   * @param event - The 'html' event.
   * @param listener - A callback that will receive the HTML data as param.
   * @returns The conversation.
   */
  once(event: 'html', listener: (html: string) => void): this;

  /**
   * Adds a one time event listener that will be triggered when the Assistant sends the new device volume level.
   *
   * @param event - The 'volume' event.
   * @param listener - A callback that will receive the new device volume level as param.
   * @returns The conversation.
   */
  once(event: 'volume', listener: (newVolume: number) => void): this;

  /**
   * Adds a one time event listener that will be triggered with the Assistant speech recognition results.
   *
   * @param event - The 'speechrecognition' event.
   * @param listener - A callback that will receive the Assistant speech recognition results as param.
   * @returns The conversation.
   */
  once(
    event: 'speechrecognition',
    listener: (
      speechRecognitionResults: AssistantSpeechRecognitionResult[],
    ) => void,
  ): this;

  /**
   * Adds a one time event listener that will be triggered when the Assistant detects the end of the user's
   * speech utterance and expects no additional speech. Therefore, it will not process additional audio
   * (although it may subsequently return additional results).
   *
   * @param event - The 'utteranceend' event.
   * @param listener - A callback that will receive the latest Assistant response as param.
   * @returns The conversation.
   */
  once(
    event: 'utteranceend',
    listener: (latestData: AssistantResponse) => void,
  ): this;

  /**
   * Adds a one time event listener that will be triggered when the Assistant closes the connection,
   * thus not sending any more data.
   *
   * @param event - The 'end' event.
   * @param listener - A callback with no params.
   * @returns The conversation.
   */
  once(event: 'end', listener: () => void): this;

  /**
   * Adds a one time event listener that will be triggered when the connection with the Assistant is
   * fully closed.
   *
   * @param event - The 'end' event.
   * @param listener - A callback with no params.
   * @returns The conversation.
   */
  once(event: 'close', listener: () => void): this;

  /**
   * Adds a one time event listener that will be triggered when any type of error occurs.
   *
   * @param event - The 'error' event.
   * @param listener - A callback that will receive the error as param.
   * @returns The conversation.
   */
  once(event: 'error', listener: (error: Error) => void): this;

  // TODO: add good docs to these methods too.
  prependListener(
    event: ConversationEvent,
    listener: (...args: any[]) => void,
  ): this;
  prependOnceListener(
    event: ConversationEvent,
    listener: (...args: any[]) => void,
  ): this;
  removeListener(
    event: ConversationEvent,
    listener: (...args: any[]) => void,
  ): this;
  removeAllListeners(event?: ConversationEvent): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(event: ConversationEvent): Array<() => void>;
  rawListeners(event: ConversationEvent): Array<() => void>;

  emit(event: 'data', data: AssistantResponse): boolean;
  emit(event: 'action', action: unknown): boolean;
  emit(event: 'actionongoogle', actionOnGoogle: unknown): boolean;
  emit(event: 'audio', audio: Buffer): boolean;
  emit(event: 'conversationend', latestData: AssistantResponse): boolean;
  emit(event: 'message', text: string): boolean;
  emit(event: 'html', html: string): boolean;
  emit(event: 'volume', newVolume: number): boolean;
  emit(
    event: 'speechrecognition',
    speechRecognitionResults: AssistantSpeechRecognitionResult[],
  ): boolean;
  emit(event: 'utteranceend', latestData: AssistantResponse): boolean;
  emit(event: 'end'): boolean;
  emit(event: 'close'): boolean;
  emit(event: 'error', error: Error): boolean;

  eventNames(): ConversationEvent[];
  listenerCount(type: ConversationEvent): number;
}
