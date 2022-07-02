import { loadSync } from '@grpc/proto-loader';
import { getProtoPath } from 'google-proto-files';
import {
  ChannelCredentials,
  ClientDuplexStream,
  loadPackageDefinition,
} from '@grpc/grpc-js';

// Service that implements the Google Assistant API.
export declare class EmbeddedAssistant {
  constructor(endpoint: string, credentials: ChannelCredentials);

  // Initiates or continues a conversation with the embedded Assistant Service.
  // Each call performs one round-trip, sending an audio request to the service
  // and receiving the audio response. Uses bidirectional streaming to receive
  // results, such as the `END_OF_UTTERANCE` event, while sending audio.
  //
  // A conversation is one or more gRPC connections, each consisting of several
  // streamed requests and responses.
  // For example, the user says *Add to my shopping list* and the Assistant
  // responds *What do you want to add?*. The sequence of streamed requests and
  // responses in the first gRPC message could be:
  //
  // *   AssistRequest.config
  // *   AssistRequest.audioIn
  // *   AssistRequest.audioIn
  // *   AssistRequest.audioIn
  // *   AssistRequest.audioIn
  // *   AssistResponse.eventType.END_OF_UTTERANCE
  // *   AssistResponse.speechResults.transcript "add to my shopping list"
  // *   AssistResponse.dialogStateOut.microphoneMode.DIALOG_FOLLOW_ON
  // *   AssistResponse.audioOut
  // *   AssistResponse.audioOut
  // *   AssistResponse.audioOut
  //
  //
  // The user then says *bagels* and the Assistant responds
  // *OK, I've added bagels to your shopping list*. This is sent as another gRPC
  // connection call to the `Assist` method, again with streamed requests and
  // responses, such as:
  //
  // *   AssistRequest.config
  // *   AssistRequest.audioIn
  // *   AssistRequest.audioIn
  // *   AssistRequest.audioIn
  // *   AssistResponse.eventType.END_OF_UTTERANCE
  // *   AssistResponse.dialogStateOut.microphoneMode.CLOSE_MICROPHONE
  // *   AssistResponse.audioOut
  // *   AssistResponse.audioOut
  // *   AssistResponse.audioOut
  // *   AssistResponse.audioOut
  //
  // Although the precise order of responses is not guaranteed, sequential
  // `AssistResponse.audioOut` messages will always contain sequential portions
  // of audio.
  public assist(): ClientDuplexStream<AssistRequest, AssistResponse>;
}

// The top-level message sent by the client. Clients must send at least two, and
// typically numerous `AssistRequest` messages. The first message must
// contain a `config` message and must not contain `audioIn` data. All
// subsequent messages must contain `audioIn` data and must not contain a
// `config` message.
export type AssistRequest =
  | {
      // The `config` message provides information to the recognizer that
      // specifies how to process the request.
      // The first `AssistRequest` message must contain a `config` message.
      config: AssistConfig;

      audioIn?: never;
    }
  | {
      // The audio data to be recognized. Sequential chunks of audio data are sent
      // in sequential `AssistRequest` messages. The first `AssistRequest`
      // message must not contain `audioIn` data and all subsequent
      // `AssistRequest` messages must contain `audioIn` data. The audio bytes
      // must be encoded as specified in `AudioInConfig`.
      // Audio must be sent at approximately real-time (16000 samples per second).
      // An error will be returned if audio is sent significantly faster or
      // slower.
      audioIn: Buffer;

      config?: never;
    };

// Indicates the type of event.
export enum AssistResponseEventType {
  // No event specified.
  EVENT_TYPE_UNSPECIFIED = 0,

  // This event indicates that the server has detected the end of the user's
  // speech utterance and expects no additional speech. Therefore, the server
  // will not process additional audio (although it may subsequently return
  // additional results). The client should stop sending additional audio
  // data, half-close the gRPC connection, and wait for any additional results
  // until the server closes the gRPC connection.
  END_OF_UTTERANCE = 1,
}

// The top-level message received by the client. A series of one or more
// `AssistResponse` messages are streamed back to the client.
export interface AssistResponse {
  // *Output-only* Indicates the type of event.
  eventType: AssistResponseEventType;

  // *Output-only* The audio containing the Assistant's response to the query.
  audioOut?: AudioOut;

  // *Output-only* Contains the Assistant's visual response to the query.
  screenOut?: ScreenOut;

  // *Output-only* Contains the action triggered by the query with the
  // appropriate payloads and semantic parsing.
  deviceAction?: DeviceAction;

  // *Output-only* This repeated list contains zero or more speech recognition
  // results that correspond to consecutive portions of the audio currently
  // being processed, starting with the portion corresponding to the earliest
  // audio (and most stable portion) to the portion corresponding to the most
  // recent audio. The strings can be concatenated to view the full
  // in-progress response. When the speech recognition completes, this list
  // will contain one item with `stability` of `1.0`.
  speechResults?: SpeechRecognitionResult[];

  // *Output-only* Contains output related to the user's query.
  dialogStateOut?: DialogStateOut;

  // *Output-only* Debugging info for developer. Only returned if request set
  // `returnDebugInfo` to true.
  debugInfo?: DebugInfo;
}

// Debug info for developer. Only returned if request set `returnDebugInfo`
// to true.
export interface DebugInfo {
  // The original JSON response from an Action-on-Google agent to Google server.
  // See
  // https://developers.google.com/actions/reference/rest/Shared.Types/AppResponse.
  // It will only be populated if the request maker owns the AoG project and the
  // AoG project is in preview mode.
  aogAgentToAssistantJson: string;
}

// Specifies how to process the `AssistRequest` messages.
export type AssistConfig = {
  // *Required* Specifies how to format the audio that will be returned.
  audioOutConfig: AudioOutConfig;

  // *Optional* Specifies the desired format to use when server returns a
  // visual screen response.
  screenOutConfig?: ScreenOutConfig;

  // *Required* Represents the current dialog state.
  dialogStateIn: DialogStateIn;

  // Device configuration that uniquely identifies a specific device.
  deviceConfig: DeviceConfig;

  // *Optional* Debugging parameters for the whole `Assist` RPC.
  debugConfig?: DebugConfig;
} & (
  | {
      // Specifies how to process the subsequent incoming audio. Required if
      // [AssistRequest.audioIn][google.assistant.embedded.v1alpha2.AssistRequest.audioIn]
      // bytes will be provided in subsequent requests.
      audioInConfig: AudioInConfig;

      textQuery?: never;
    }
  | {
      // The text input to be sent to the Assistant. This can be populated from a
      // text interface if audio input is not available.
      textQuery: string;

      audioInConfig?: never;
    }
);

// Audio encoding of the data sent in the audio message.
// Audio must be one-channel (mono).
export enum AudioInEncoding {
  // Not specified. Will return result [google.rpc.Code.INVALID_ARGUMENT][].
  ENCODING_UNSPECIFIED = 0,

  // Uncompressed 16-bit signed little-endian samples (Linear PCM).
  // This encoding includes no header, only the raw audio bytes.
  LINEAR16 = 1,

  // [`FLAC`](https://xiph.org/flac/documentation.html) (Free Lossless Audio
  // Codec) is the recommended encoding because it is
  // lossless--therefore recognition is not compromised--and
  // requires only about half the bandwidth of `LINEAR16`. This encoding
  // includes the `FLAC` stream header followed by audio data. It supports
  // 16-bit and 24-bit samples, however, not all fields in `STREAMINFO` are
  // supported.
  FLAC = 2,
}

// Specifies how to process the `audioIn` data that will be provided in
// subsequent requests. For recommended settings, see the Google Assistant SDK
// [best practices](https://developers.google.com/assistant/sdk/guides/service/python/best-practices/audio).
export interface AudioInConfig {
  // *Required* Encoding of audio data sent in all `audioIn` messages.
  encoding: AudioInEncoding;

  // *Required* Sample rate (in Hertz) of the audio data sent in all `audioIn`
  // messages. Valid values are from 16000-24000, but 16000 is optimal.
  // For best results, set the sampling rate of the audio source to 16000 Hz.
  // If that's not possible, use the native sample rate of the audio source
  // (instead of re-sampling).
  sampleRateHertz: number;
}

// Audio encoding of the data returned in the audio message. All encodings are
// raw audio bytes with no header, except as indicated below.
export enum AudioOutEncoding {
  // Not specified. Will return result [google.rpc.Code.INVALID_ARGUMENT][].
  ENCODING_UNSPECIFIED = 0,

  // Uncompressed 16-bit signed little-endian samples (Linear PCM).
  LINEAR16 = 1,

  // MP3 audio encoding. The sample rate is encoded in the payload.
  MP3 = 2,

  // Opus-encoded audio wrapped in an ogg container. The result will be a
  // file which can be played natively on Android and in some browsers (such
  // as Chrome). The quality of the encoding is considerably higher than MP3
  // while using the same bitrate. The sample rate is encoded in the payload.
  OPUS_IN_OGG = 3,
}

// Specifies the desired format for the server to use when it returns
// `audioOut` messages.
export interface AudioOutConfig {
  // *Required* The encoding of audio data to be returned in all `audioOut`
  // messages.
  encoding: AudioOutEncoding;

  // *Required* The sample rate in Hertz of the audio data returned in
  // `audioOut` messages. Valid values are: 16000-24000.
  sampleRateHertz: number;

  // *Required* Current volume setting of the device's audio output.
  // Valid values are 1 to 100 (corresponding to 1% to 100%).
  volumePercentage: number;
}

// Possible modes for visual screen-output on the device.
export enum ScreenMode {
  // No video mode specified.
  // The Assistant may respond as if in `OFF` mode.
  SCREEN_MODE_UNSPECIFIED = 0,

  // Screen is off (or has brightness or other settings set so low it is
  // not visible). The Assistant will typically not return a screen response
  // in this mode.
  OFF = 1,

  // The Assistant will typically return a partial-screen response in this
  // mode.
  PLAYING = 3,
}

// Specifies the desired format for the server to use when it returns
// `screenOut` response.
export interface ScreenOutConfig {
  // Current visual screen-mode for the device while issuing the query.
  screenMode?: ScreenMode;
}

// Provides information about the current dialog state.
export interface DialogStateIn {
  // *Required* This field must always be set to the
  // [DialogStateOut.conversationState][google.assistant.embedded.v1alpha2.DialogStateOut.conversationState]
  // value that was returned in the prior `Assist` RPC. It should only be omitted (field not set)
  // if there was no prior `Assist` RPC because this is the first `Assist` RPC made by this
  // device after it was first setup and/or a factory-default reset.
  conversationState?: Buffer;

  // *Required* Language of the request in
  // [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example,
  // "en-US"). See [Language Support](https://developers.google.com/assistant/sdk/reference/rpc/languages)
  // for more information. If you have selected a language for this `deviceId`
  // using the [Settings](https://developers.google.com/assistant/sdk/reference/assistant-app/assistant-settings)
  // menu in your phone's Google Assistant app, that selection will override
  // this value.
  languageCode: string;

  // *Optional* Location of the device where the query originated.
  deviceLocation?: DeviceLocation;

  // *Optional* If true, the server will treat the request as a new conversation
  // and not use state from the prior request. Set this field to true when the
  // conversation should be restarted, such as after a device reboot, or after a
  // significant lapse of time since the prior query.
  isNewConversation?: boolean;
}

// *Required* Fields that identify the device to the Assistant.
//
// See also:
//
// *   [Register a Device - REST
// API](https://developers.google.com/assistant/sdk/reference/device-registration/register-device-manual)
// *   [Device Model and Instance
// Schemas](https://developers.google.com/assistant/sdk/reference/device-registration/model-and-instance-schemas)
// *   [Device
// Proto](https://developers.google.com/assistant/sdk/reference/rpc/google.assistant.devices.v1alpha2#device)
export interface DeviceConfig {
  // *Required* Unique identifier for the device. The id length must be 128
  // characters or less. Example: DBCDW098234. This MUST match the deviceId
  // returned from device registration. This deviceId is used to match against
  // the user's registered devices to lookup the supported traits and
  // capabilities of this device. This information should not change across
  // device reboots. However, it should not be saved across
  // factory-default resets.
  deviceId: string;

  // *Required* Unique identifier for the device model. The combination of
  // deviceModelId and deviceId must have been previously associated through
  // device registration.
  deviceModelId: string;
}

// The audio containing the Assistant's response to the query. Sequential chunks
// of audio data are received in sequential `AssistResponse` messages.
export interface AudioOut {
  // *Output-only* The audio data containing the Assistant's response to the
  // query. Sequential chunks of audio data are received in sequential
  // `AssistResponse` messages.
  audioData: Buffer;
}

// Possible formats of the screen data.
export enum ScreenOutFormat {
  // No format specified.
  FORMAT_UNSPECIFIED = 0,

  // Data will contain a fully-formed HTML5 layout encoded in UTF-8, e.g.
  // `<html><body><div>...</div></body></html>`. It is intended to be rendered
  // along with the audio response. Note that HTML5 doctype should be included
  // in the actual HTML data.
  HTML = 1,
}

// The Assistant's visual output response to query. Enabled by
// `screenOutConfig`.
export interface ScreenOut {
  // *Output-only* The format of the provided screen data.
  format: ScreenOutFormat;

  // *Output-only* The raw screen data to be displayed as the result of the
  // Assistant query.
  data: Buffer;
}

// The response returned to the device if the user has triggered a Device
// Action. For example, a device which supports the query *Turn on the light*
// would receive a `DeviceAction` with a JSON payload containing the semantics
// of the request.
export interface DeviceAction {
  // JSON containing the device command response generated from the triggered
  // Device Action grammar. The format is given by the
  // `action.devices.EXECUTE` intent for a given
  // [trait](https://developers.google.com/assistant/sdk/reference/traits/).
  deviceRequestJson: string;
}

// The estimated transcription of a phrase the user has spoken. This could be
// a single segment or the full guess of the user's spoken query.
export interface SpeechRecognitionResult {
  // *Output-only* Transcript text representing the words that the user spoke.
  transcript: string;

  // *Output-only* An estimate of the likelihood that the Assistant will not
  // change its guess about this result. Values range from 0.0 (completely
  // unstable) to 1.0 (completely stable and final). The default of 0.0 is a
  // sentinel value indicating `stability` was not set.
  stability: number;
}

// Possible states of the microphone after a `Assist` RPC completes.
export enum MicrophoneMode {
  // No mode specified.
  MICROPHONE_MODE_UNSPECIFIED = 0,

  // The service is not expecting a follow-on question from the user.
  // The microphone should remain off until the user re-activates it.
  CLOSE_MICROPHONE = 1,

  // The service is expecting a follow-on question from the user. The
  // microphone should be re-opened when the `AudioOut` playback completes
  // (by starting a new `Assist` RPC call to send the new audio).
  DIALOG_FOLLOW_ON = 2,
}

// The dialog state resulting from the user's query. Multiple of these messages
// may be received.
export interface DialogStateOut {
  // *Output-only* Supplemental display text from the Assistant. This could be
  // the same as the speech spoken in `AssistResponse.audioOut` or it could
  // be some additional information which aids the user's understanding.
  supplementalDisplayText: string;

  // *Output-only* State information for the subsequent `Assist` RPC. This
  // value should be saved in the client and returned in the
  // [`DialogStateIn.conversationState`](#dialogstatein) field with the next
  // `Assist` RPC. (The client does not need to interpret or otherwise use this
  // value.) This information should be saved across device reboots. However,
  // this value should be cleared (not saved in the client) during a
  // factory-default reset.
  conversationState: Buffer;

  // *Output-only* Specifies the mode of the microphone after this `Assist`
  // RPC is processed.
  microphoneMode: MicrophoneMode;

  // *Output-only* Updated volume level. The value will be 0 or omitted
  // (indicating no change) unless a voice command such as *Increase the volume*
  // or *Set volume level 4* was recognized, in which case the value will be
  // between 1 and 100 (corresponding to the new volume level of 1% to 100%).
  // Typically, a client should use this volume level when playing the
  // `audioOut` data, and retain this value as the current volume level and
  // supply it in the `AudioOutConfig` of the next `AssistRequest`. (Some
  // clients may also implement other ways to allow the current volume level to
  // be changed, for example, by providing a knob that the user can turn.)
  volumePercentage: number;
}

// Debugging parameters for the current request.
export interface DebugConfig {
  // When this field is set to true, the `debugInfo` field in `AssistResponse`
  // may be populated. However it will significantly increase latency of
  // responses. Do not set this field true in production code.
  returnDebugInfo: boolean;
}

// An object representing a latitude/longitude pair. This is expressed as a pair
// of doubles representing degrees latitude and degrees longitude. Unless
// specified otherwise, this must conform to the
// <a href="http://www.unoosa.org/pdf/icg/2012/template/WGS_84.pdf">WGS84
// standard</a>. Values must be within normalized ranges.
//
// Example of normalization code in Python:
//
//     def NormalizeLongitude(longitude):
//       """Wraps decimal degrees longitude to [-180.0, 180.0]."""
//       q, r = divmod(longitude, 360.0)
//       if r > 180.0 or (r == 180.0 and q <= -1.0):
//         return r - 360.0
//       return r
//
//     def NormalizeLatLng(latitude, longitude):
//       """Wraps decimal degrees latitude and longitude to
//       [-90.0, 90.0] and [-180.0, 180.0], respectively."""
//       r = latitude % 360.0
//       if r <= 90.0:
//         return r, NormalizeLongitude(longitude)
//       elif r >= 270.0:
//         return r - 360, NormalizeLongitude(longitude)
//       else:
//         return 180 - r, NormalizeLongitude(longitude + 180.0)
//
//     assert 180.0 == NormalizeLongitude(180.0)
//     assert -180.0 == NormalizeLongitude(-180.0)
//     assert -179.0 == NormalizeLongitude(181.0)
//     assert (0.0, 0.0) == NormalizeLatLng(360.0, 0.0)
//     assert (0.0, 0.0) == NormalizeLatLng(-360.0, 0.0)
//     assert (85.0, 180.0) == NormalizeLatLng(95.0, 0.0)
//     assert (-85.0, -170.0) == NormalizeLatLng(-95.0, 10.0)
//     assert (90.0, 10.0) == NormalizeLatLng(90.0, 10.0)
//     assert (-90.0, -10.0) == NormalizeLatLng(-90.0, -10.0)
//     assert (0.0, -170.0) == NormalizeLatLng(-180.0, 10.0)
//     assert (0.0, -170.0) == NormalizeLatLng(180.0, 10.0)
//     assert (-90.0, 10.0) == NormalizeLatLng(270.0, 10.0)
//     assert (90.0, 10.0) == NormalizeLatLng(-270.0, 10.0)
export interface LatLng {
  // The latitude in degrees. It must be in the range [-90.0, +90.0].
  latitude: number;

  // The longitude in degrees. It must be in the range [-180.0, +180.0].
  longitude: number;
}

// There are three sources of locations. They are used with this precedence:
//
// 1. This `DeviceLocation`, which is primarily used for mobile devices with
//    GPS .
// 2. Location specified by the user during device setup; this is per-user, per
//    device. This location is used if `DeviceLocation` is not specified.
// 3. Inferred location based on IP address. This is used only if neither of the
//    above are specified.
export interface DeviceLocation {
  coordinates: LatLng;
}

const PROTO_ROOT_DIR = getProtoPath('..');

const proto: any = loadSync(
  'google/assistant/embedded/v1alpha2/embedded_assistant.proto',
  {
    includeDirs: [PROTO_ROOT_DIR],
  },
);

const { google }: any = loadPackageDefinition(proto);

export const embeddedAssistantPb: typeof EmbeddedAssistant =
  google.assistant.embedded.v1alpha2.EmbeddedAssistant;
