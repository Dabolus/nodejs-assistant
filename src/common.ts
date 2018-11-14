export interface AssistantOptions {
  locale: AssistantLanguage;
  deviceModelId: string;
  deviceId: string;
}

export interface AssistantResponse {
  action?: any;
  text?: string;
  audio?: Buffer;
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
};
