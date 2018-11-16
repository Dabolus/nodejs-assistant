import { AssistResponse, AssistResponseEventType, MicrophoneMode, ScreenOutFormat } from './proto';

export interface AssistantOptions {
  locale: AssistantLanguage;
  deviceModelId: string;
  deviceId: string;
}

export interface AssistantSpeechRecognitionResult {
  transcript: string;
  stability: number;
}

export interface AssistantResponse {
  action?: any;
  actionOnGoogle?: any;
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
    ...audioOut ? { audio: audioOut.audioData } : {},
    ...debugInfo ? { actionOnGoogle: debugInfo.aogAgentToAssistantJson } : {},
    ...deviceAction ? { action: deviceAction.deviceRequestJson } : {},
    ...dialogStateOut ? {
      conversationEnded: dialogStateOut.microphoneMode === MicrophoneMode.CLOSE_MICROPHONE,
      conversationState: dialogStateOut.conversationState,
      text: dialogStateOut.supplementalDisplayText,
      ...dialogStateOut.volumePercentage ? { newVolume: dialogStateOut.volumePercentage } : {},
    } : {},
    ...screenOut && screenOut.format === ScreenOutFormat.HTML ? { html: screenOut.data.toString() } : {},
    ...speechResults && speechResults.length ? { speechRecognitionResults: speechResults } : {},
    utteranceEnded: eventType === AssistResponseEventType.END_OF_UTTERANCE,
  };
}
