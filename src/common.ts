import {
  AssistRequest,
  AssistResponse,
  AssistResponseEventType,
  AudioInConfig,
  AudioOutConfig,
  LatLng,
  MicrophoneMode,
  ScreenMode,
  ScreenOutFormat,
} from './proto';

export interface AssistantOptions {
  locale: AssistantLanguage;
  deviceId: string;
  deviceModelId: string;
}

export interface AssistantSpeechRecognitionResult {
  transcript: string;
  stability: number;
}

export type AssistantRequest =
  | {
      audio?: Buffer;
      audioInConfig?: never;
      audioOutConfig?: never;
      debug?: never;
      deviceId?: never;
      deviceModelId?: never;
      conversationState?: never;
      deviceLocation?: never;
      isNewConversation?: never;
      locale?: never;
      html?: never;
      text?: never;
    }
  | ({
      audioOutConfig: AudioOutConfig;
      html?: boolean;
      conversationState?: Buffer;
      locale: AssistantLanguage;
      deviceLocation?: LatLng;
      isNewConversation?: boolean;
      deviceId: string;
      deviceModelId: string;
      debug?: boolean;
      audio?: never;
    } & (
      | {
          audioInConfig: AudioInConfig;
          text?: never;
        }
      | {
          text: string;
          audioInConfig?: never;
        }
    ));

// TODO: replace with more specific types
export type Action = { [key: string]: unknown };

// TODO: replace with more specific types
export type ActionOnGoogle = { [key: string]: unknown };

export interface AssistantResponse {
  action?: Action;
  actionOnGoogle?: ActionOnGoogle;
  audio?: Buffer;
  conversationEnded?: boolean;
  conversationState?: Buffer;
  html?: string;
  newVolume?: number;
  speechRecognitionResults?: AssistantSpeechRecognitionResult[];
  text?: string;
  utteranceEnded?: boolean;
}

export enum AssistantLanguage {
  GERMAN = 'de-DE',
  ENGLISH_AU = 'en-AU',
  ENGLISH_CA = 'en-CA',
  ENGLISH_UK = 'en-GB',
  ENGLISH_IN = 'en-IN',
  ENGLISH_US = 'en-US',
  ENGLISH = 'en-US',
  FRENCH_CA = 'fr-CA',
  FRENCH_FR = 'fr-FR',
  FRENCH = 'fr-FR',
  ITALIAN = 'it-IT',
  JAPANESE = 'ja-JP',
  SPANISH_ES = 'es-ES',
  SPANISH_MX = 'es-MX',
  SPANISH = 'es-ES',
  KOREAN = 'ko-KR',
  PORTUGUESE = 'pt-BR',
}

export function mapAssistantRequestToAssistRequest({
  audio,
  audioInConfig,
  audioOutConfig,
  debug,
  deviceId,
  deviceModelId,
  conversationState,
  deviceLocation,
  isNewConversation,
  locale,
  html,
  text,
}: AssistantRequest): AssistRequest {
  if (audio) {
    return { audioIn: audio };
  }
  return {
    config: {
      audioOutConfig,
      ...(html
        ? {
            screenOutConfig: {
              screenMode: ScreenMode.PLAYING,
            },
          }
        : {}),
      deviceConfig: {
        deviceId,
        deviceModelId,
      },
      dialogStateIn: {
        ...(conversationState ? { conversationState } : {}),
        languageCode: locale,
        ...(deviceLocation
          ? {
              deviceLocation: {
                coordinates: deviceLocation,
              },
            }
          : {}),
        ...(isNewConversation ? { isNewConversation } : {}),
      },
      ...(debug
        ? {
            debugConfig: {
              returnDebugInfo: debug,
            },
          }
        : {}),
      ...(audioInConfig ? { audioInConfig } : { textQuery: text }),
    },
  };
}

export function mapAssistResponseToAssistantResponse({
  audioOut,
  debugInfo,
  deviceAction,
  dialogStateOut,
  eventType,
  screenOut,
  speechResults,
}: AssistResponse): AssistantResponse {
  return {
    ...(audioOut ? { audio: audioOut.audioData } : {}),
    ...(debugInfo
      ? { actionOnGoogle: JSON.parse(debugInfo.aogAgentToAssistantJson) }
      : {}),
    ...(deviceAction
      ? { action: JSON.parse(deviceAction.deviceRequestJson) }
      : {}),
    ...(dialogStateOut
      ? {
          conversationEnded:
            dialogStateOut.microphoneMode === MicrophoneMode.CLOSE_MICROPHONE,
          conversationState: dialogStateOut.conversationState,
          text: dialogStateOut.supplementalDisplayText,
          ...(dialogStateOut.volumePercentage
            ? { newVolume: dialogStateOut.volumePercentage }
            : {}),
        }
      : {}),
    ...(screenOut && screenOut.format === ScreenOutFormat.HTML
      ? { html: screenOut.data.toString() }
      : {}),
    ...(speechResults && speechResults.length
      ? { speechRecognitionResults: speechResults }
      : {}),
    utteranceEnded: eventType === AssistResponseEventType.END_OF_UTTERANCE,
  };
}
