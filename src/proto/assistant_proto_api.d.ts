import * as $protobuf from "protobufjs/minimal";
/** Namespace google. */
export namespace google {

    /** Namespace type. */
    namespace type {

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;
        }
    }

    /** Namespace assistant. */
    namespace assistant {

        /** Namespace embedded. */
        namespace embedded {

            /** Namespace v1alpha2. */
            namespace v1alpha2 {

                /** Represents an EmbeddedAssistant */
                class EmbeddedAssistant extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new EmbeddedAssistant service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Calls Assist.
                     * @param request AssistRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AssistResponse
                     */
                    public assist(request: google.assistant.embedded.v1alpha2.IAssistRequest, callback: google.assistant.embedded.v1alpha2.EmbeddedAssistant.AssistCallback): void;

                    /**
                     * Calls Assist.
                     * @param request AssistRequest message or plain object
                     * @returns Promise
                     */
                    public assist(request: google.assistant.embedded.v1alpha2.IAssistRequest): Promise<google.assistant.embedded.v1alpha2.AssistResponse>;
                }

                namespace EmbeddedAssistant {

                    /**
                     * Callback as used by {@link google.assistant.embedded.v1alpha2.EmbeddedAssistant#assist}.
                     * @param error Error, if any
                     * @param [response] AssistResponse
                     */
                    type AssistCallback = (error: (Error|null), response?: google.assistant.embedded.v1alpha2.AssistResponse) => void;
                }

                /** Properties of an AssistRequest. */
                interface IAssistRequest {

                    /** AssistRequest config */
                    config?: (google.assistant.embedded.v1alpha2.IAssistConfig|null);

                    /** AssistRequest audioIn */
                    audioIn?: (Uint8Array|null);
                }

                /** Represents an AssistRequest. */
                class AssistRequest implements IAssistRequest {

                    /**
                     * Constructs a new AssistRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IAssistRequest);

                    /** AssistRequest config. */
                    public config?: (google.assistant.embedded.v1alpha2.IAssistConfig|null);

                    /** AssistRequest audioIn. */
                    public audioIn: Uint8Array;

                    /** AssistRequest type. */
                    public type?: ("config"|"audioIn");
                }

                /** Properties of an AssistResponse. */
                interface IAssistResponse {

                    /** AssistResponse eventType */
                    eventType?: (google.assistant.embedded.v1alpha2.AssistResponse.EventType|null);

                    /** AssistResponse audioOut */
                    audioOut?: (google.assistant.embedded.v1alpha2.IAudioOut|null);

                    /** AssistResponse screenOut */
                    screenOut?: (google.assistant.embedded.v1alpha2.IScreenOut|null);

                    /** AssistResponse deviceAction */
                    deviceAction?: (google.assistant.embedded.v1alpha2.IDeviceAction|null);

                    /** AssistResponse speechResults */
                    speechResults?: (google.assistant.embedded.v1alpha2.ISpeechRecognitionResult[]|null);

                    /** AssistResponse dialogStateOut */
                    dialogStateOut?: (google.assistant.embedded.v1alpha2.IDialogStateOut|null);

                    /** AssistResponse debugInfo */
                    debugInfo?: (google.assistant.embedded.v1alpha2.IDebugInfo|null);
                }

                /** Represents an AssistResponse. */
                class AssistResponse implements IAssistResponse {

                    /**
                     * Constructs a new AssistResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IAssistResponse);

                    /** AssistResponse eventType. */
                    public eventType: google.assistant.embedded.v1alpha2.AssistResponse.EventType;

                    /** AssistResponse audioOut. */
                    public audioOut?: (google.assistant.embedded.v1alpha2.IAudioOut|null);

                    /** AssistResponse screenOut. */
                    public screenOut?: (google.assistant.embedded.v1alpha2.IScreenOut|null);

                    /** AssistResponse deviceAction. */
                    public deviceAction?: (google.assistant.embedded.v1alpha2.IDeviceAction|null);

                    /** AssistResponse speechResults. */
                    public speechResults: google.assistant.embedded.v1alpha2.ISpeechRecognitionResult[];

                    /** AssistResponse dialogStateOut. */
                    public dialogStateOut?: (google.assistant.embedded.v1alpha2.IDialogStateOut|null);

                    /** AssistResponse debugInfo. */
                    public debugInfo?: (google.assistant.embedded.v1alpha2.IDebugInfo|null);
                }

                namespace AssistResponse {

                    /** EventType enum. */
                    type EventType =
                        "EVENT_TYPE_UNSPECIFIED"| "END_OF_UTTERANCE";
                }

                /** Properties of a DebugInfo. */
                interface IDebugInfo {

                    /** DebugInfo aogAgentToAssistantJson */
                    aogAgentToAssistantJson?: (string|null);
                }

                /** Represents a DebugInfo. */
                class DebugInfo implements IDebugInfo {

                    /**
                     * Constructs a new DebugInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IDebugInfo);

                    /** DebugInfo aogAgentToAssistantJson. */
                    public aogAgentToAssistantJson: string;
                }

                /** Properties of an AssistConfig. */
                interface IAssistConfig {

                    /** AssistConfig audioInConfig */
                    audioInConfig?: (google.assistant.embedded.v1alpha2.IAudioInConfig|null);

                    /** AssistConfig textQuery */
                    textQuery?: (string|null);

                    /** AssistConfig audioOutConfig */
                    audioOutConfig?: (google.assistant.embedded.v1alpha2.IAudioOutConfig|null);

                    /** AssistConfig screenOutConfig */
                    screenOutConfig?: (google.assistant.embedded.v1alpha2.IScreenOutConfig|null);

                    /** AssistConfig dialogStateIn */
                    dialogStateIn?: (google.assistant.embedded.v1alpha2.IDialogStateIn|null);

                    /** AssistConfig deviceConfig */
                    deviceConfig?: (google.assistant.embedded.v1alpha2.IDeviceConfig|null);

                    /** AssistConfig debugConfig */
                    debugConfig?: (google.assistant.embedded.v1alpha2.IDebugConfig|null);
                }

                /** Represents an AssistConfig. */
                class AssistConfig implements IAssistConfig {

                    /**
                     * Constructs a new AssistConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IAssistConfig);

                    /** AssistConfig audioInConfig. */
                    public audioInConfig?: (google.assistant.embedded.v1alpha2.IAudioInConfig|null);

                    /** AssistConfig textQuery. */
                    public textQuery: string;

                    /** AssistConfig audioOutConfig. */
                    public audioOutConfig?: (google.assistant.embedded.v1alpha2.IAudioOutConfig|null);

                    /** AssistConfig screenOutConfig. */
                    public screenOutConfig?: (google.assistant.embedded.v1alpha2.IScreenOutConfig|null);

                    /** AssistConfig dialogStateIn. */
                    public dialogStateIn?: (google.assistant.embedded.v1alpha2.IDialogStateIn|null);

                    /** AssistConfig deviceConfig. */
                    public deviceConfig?: (google.assistant.embedded.v1alpha2.IDeviceConfig|null);

                    /** AssistConfig debugConfig. */
                    public debugConfig?: (google.assistant.embedded.v1alpha2.IDebugConfig|null);

                    /** AssistConfig type. */
                    public type?: ("audioInConfig"|"textQuery");
                }

                /** Properties of an AudioInConfig. */
                interface IAudioInConfig {

                    /** AudioInConfig encoding */
                    encoding?: (google.assistant.embedded.v1alpha2.AudioInConfig.Encoding|null);

                    /** AudioInConfig sampleRateHertz */
                    sampleRateHertz?: (number|null);
                }

                /** Represents an AudioInConfig. */
                class AudioInConfig implements IAudioInConfig {

                    /**
                     * Constructs a new AudioInConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IAudioInConfig);

                    /** AudioInConfig encoding. */
                    public encoding: google.assistant.embedded.v1alpha2.AudioInConfig.Encoding;

                    /** AudioInConfig sampleRateHertz. */
                    public sampleRateHertz: number;
                }

                namespace AudioInConfig {

                    /** Encoding enum. */
                    type Encoding =
                        "ENCODING_UNSPECIFIED"| "LINEAR16"| "FLAC";
                }

                /** Properties of an AudioOutConfig. */
                interface IAudioOutConfig {

                    /** AudioOutConfig encoding */
                    encoding?: (google.assistant.embedded.v1alpha2.AudioOutConfig.Encoding|null);

                    /** AudioOutConfig sampleRateHertz */
                    sampleRateHertz?: (number|null);

                    /** AudioOutConfig volumePercentage */
                    volumePercentage?: (number|null);
                }

                /** Represents an AudioOutConfig. */
                class AudioOutConfig implements IAudioOutConfig {

                    /**
                     * Constructs a new AudioOutConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IAudioOutConfig);

                    /** AudioOutConfig encoding. */
                    public encoding: google.assistant.embedded.v1alpha2.AudioOutConfig.Encoding;

                    /** AudioOutConfig sampleRateHertz. */
                    public sampleRateHertz: number;

                    /** AudioOutConfig volumePercentage. */
                    public volumePercentage: number;
                }

                namespace AudioOutConfig {

                    /** Encoding enum. */
                    type Encoding =
                        "ENCODING_UNSPECIFIED"| "LINEAR16"| "MP3"| "OPUS_IN_OGG";
                }

                /** Properties of a ScreenOutConfig. */
                interface IScreenOutConfig {

                    /** ScreenOutConfig screenMode */
                    screenMode?: (google.assistant.embedded.v1alpha2.ScreenOutConfig.ScreenMode|null);
                }

                /** Represents a ScreenOutConfig. */
                class ScreenOutConfig implements IScreenOutConfig {

                    /**
                     * Constructs a new ScreenOutConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IScreenOutConfig);

                    /** ScreenOutConfig screenMode. */
                    public screenMode: google.assistant.embedded.v1alpha2.ScreenOutConfig.ScreenMode;
                }

                namespace ScreenOutConfig {

                    /** ScreenMode enum. */
                    type ScreenMode =
                        "SCREEN_MODE_UNSPECIFIED"| "OFF"| "PLAYING";
                }

                /** Properties of a DialogStateIn. */
                interface IDialogStateIn {

                    /** DialogStateIn conversationState */
                    conversationState?: (Uint8Array|null);

                    /** DialogStateIn languageCode */
                    languageCode?: (string|null);

                    /** DialogStateIn deviceLocation */
                    deviceLocation?: (google.assistant.embedded.v1alpha2.IDeviceLocation|null);

                    /** DialogStateIn isNewConversation */
                    isNewConversation?: (boolean|null);
                }

                /** Represents a DialogStateIn. */
                class DialogStateIn implements IDialogStateIn {

                    /**
                     * Constructs a new DialogStateIn.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IDialogStateIn);

                    /** DialogStateIn conversationState. */
                    public conversationState: Uint8Array;

                    /** DialogStateIn languageCode. */
                    public languageCode: string;

                    /** DialogStateIn deviceLocation. */
                    public deviceLocation?: (google.assistant.embedded.v1alpha2.IDeviceLocation|null);

                    /** DialogStateIn isNewConversation. */
                    public isNewConversation: boolean;
                }

                /** Properties of a DeviceConfig. */
                interface IDeviceConfig {

                    /** DeviceConfig deviceId */
                    deviceId?: (string|null);

                    /** DeviceConfig deviceModelId */
                    deviceModelId?: (string|null);
                }

                /** Represents a DeviceConfig. */
                class DeviceConfig implements IDeviceConfig {

                    /**
                     * Constructs a new DeviceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IDeviceConfig);

                    /** DeviceConfig deviceId. */
                    public deviceId: string;

                    /** DeviceConfig deviceModelId. */
                    public deviceModelId: string;
                }

                /** Properties of an AudioOut. */
                interface IAudioOut {

                    /** AudioOut audioData */
                    audioData?: (Uint8Array|null);
                }

                /** Represents an AudioOut. */
                class AudioOut implements IAudioOut {

                    /**
                     * Constructs a new AudioOut.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IAudioOut);

                    /** AudioOut audioData. */
                    public audioData: Uint8Array;
                }

                /** Properties of a ScreenOut. */
                interface IScreenOut {

                    /** ScreenOut format */
                    format?: (google.assistant.embedded.v1alpha2.ScreenOut.Format|null);

                    /** ScreenOut data */
                    data?: (Uint8Array|null);
                }

                /** Represents a ScreenOut. */
                class ScreenOut implements IScreenOut {

                    /**
                     * Constructs a new ScreenOut.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IScreenOut);

                    /** ScreenOut format. */
                    public format: google.assistant.embedded.v1alpha2.ScreenOut.Format;

                    /** ScreenOut data. */
                    public data: Uint8Array;
                }

                namespace ScreenOut {

                    /** Format enum. */
                    type Format =
                        "FORMAT_UNSPECIFIED"| "HTML";
                }

                /** Properties of a DeviceAction. */
                interface IDeviceAction {

                    /** DeviceAction deviceRequestJson */
                    deviceRequestJson?: (string|null);
                }

                /** Represents a DeviceAction. */
                class DeviceAction implements IDeviceAction {

                    /**
                     * Constructs a new DeviceAction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IDeviceAction);

                    /** DeviceAction deviceRequestJson. */
                    public deviceRequestJson: string;
                }

                /** Properties of a SpeechRecognitionResult. */
                interface ISpeechRecognitionResult {

                    /** SpeechRecognitionResult transcript */
                    transcript?: (string|null);

                    /** SpeechRecognitionResult stability */
                    stability?: (number|null);
                }

                /** Represents a SpeechRecognitionResult. */
                class SpeechRecognitionResult implements ISpeechRecognitionResult {

                    /**
                     * Constructs a new SpeechRecognitionResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.ISpeechRecognitionResult);

                    /** SpeechRecognitionResult transcript. */
                    public transcript: string;

                    /** SpeechRecognitionResult stability. */
                    public stability: number;
                }

                /** Properties of a DialogStateOut. */
                interface IDialogStateOut {

                    /** DialogStateOut supplementalDisplayText */
                    supplementalDisplayText?: (string|null);

                    /** DialogStateOut conversationState */
                    conversationState?: (Uint8Array|null);

                    /** DialogStateOut microphoneMode */
                    microphoneMode?: (google.assistant.embedded.v1alpha2.DialogStateOut.MicrophoneMode|null);

                    /** DialogStateOut volumePercentage */
                    volumePercentage?: (number|null);
                }

                /** Represents a DialogStateOut. */
                class DialogStateOut implements IDialogStateOut {

                    /**
                     * Constructs a new DialogStateOut.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IDialogStateOut);

                    /** DialogStateOut supplementalDisplayText. */
                    public supplementalDisplayText: string;

                    /** DialogStateOut conversationState. */
                    public conversationState: Uint8Array;

                    /** DialogStateOut microphoneMode. */
                    public microphoneMode: google.assistant.embedded.v1alpha2.DialogStateOut.MicrophoneMode;

                    /** DialogStateOut volumePercentage. */
                    public volumePercentage: number;
                }

                namespace DialogStateOut {

                    /** MicrophoneMode enum. */
                    type MicrophoneMode =
                        "MICROPHONE_MODE_UNSPECIFIED"| "CLOSE_MICROPHONE"| "DIALOG_FOLLOW_ON";
                }

                /** Properties of a DebugConfig. */
                interface IDebugConfig {

                    /** DebugConfig returnDebugInfo */
                    returnDebugInfo?: (boolean|null);
                }

                /** Represents a DebugConfig. */
                class DebugConfig implements IDebugConfig {

                    /**
                     * Constructs a new DebugConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IDebugConfig);

                    /** DebugConfig returnDebugInfo. */
                    public returnDebugInfo: boolean;
                }

                /** Properties of a DeviceLocation. */
                interface IDeviceLocation {

                    /** DeviceLocation coordinates */
                    coordinates?: (google.type.ILatLng|null);
                }

                /** Represents a DeviceLocation. */
                class DeviceLocation implements IDeviceLocation {

                    /**
                     * Constructs a new DeviceLocation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.assistant.embedded.v1alpha2.IDeviceLocation);

                    /** DeviceLocation coordinates. */
                    public coordinates?: (google.type.ILatLng|null);

                    /** DeviceLocation type. */
                    public type?: "coordinates";
                }
            }
        }
    }
}
