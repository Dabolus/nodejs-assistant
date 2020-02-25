[Assistant SDK for Node.js](README.md) › [Globals](globals.md)

# Assistant SDK for Node.js

## Index

### Enumerations

* [AssistResponseEventType](enums/assistresponseeventtype.md)
* [AssistantLanguage](enums/assistantlanguage.md)
* [AudioInEncoding](enums/audioinencoding.md)
* [AudioOutEncoding](enums/audiooutencoding.md)
* [MicrophoneMode](enums/microphonemode.md)
* [ScreenMode](enums/screenmode.md)
* [ScreenOutFormat](enums/screenoutformat.md)

### Classes

* [Assistant](classes/assistant.md)
* [AudioConversation](classes/audioconversation.md)
* [Conversation](classes/conversation.md)
* [EmbeddedAssistant](classes/embeddedassistant.md)
* [TextConversation](classes/textconversation.md)

### Interfaces

* [AssistResponse](interfaces/assistresponse.md)
* [AssistantOptions](interfaces/assistantoptions.md)
* [AssistantQueryOptions](interfaces/assistantqueryoptions.md)
* [AssistantResponse](interfaces/assistantresponse.md)
* [AssistantSpeechRecognitionResult](interfaces/assistantspeechrecognitionresult.md)
* [AudioInConfig](interfaces/audioinconfig.md)
* [AudioOut](interfaces/audioout.md)
* [AudioOutConfig](interfaces/audiooutconfig.md)
* [DebugConfig](interfaces/debugconfig.md)
* [DebugInfo](interfaces/debuginfo.md)
* [DeviceAction](interfaces/deviceaction.md)
* [DeviceConfig](interfaces/deviceconfig.md)
* [DeviceLocation](interfaces/devicelocation.md)
* [DialogStateIn](interfaces/dialogstatein.md)
* [DialogStateOut](interfaces/dialogstateout.md)
* [LatLng](interfaces/latlng.md)
* [ScreenOut](interfaces/screenout.md)
* [ScreenOutConfig](interfaces/screenoutconfig.md)
* [SpeechRecognitionResult](interfaces/speechrecognitionresult.md)

### Type aliases

* [Action](globals.md#action)
* [ActionOnGoogle](globals.md#actionongoogle)
* [AssistConfig](globals.md#assistconfig)
* [AssistRequest](globals.md#assistrequest)
* [AssistantRequest](globals.md#assistantrequest)
* [ConversationEvent](globals.md#conversationevent)

### Variables

* [PROTO_ROOT_DIR](globals.md#const-proto_root_dir)
* [embeddedAssistantPb](globals.md#const-embeddedassistantpb)
* [google](globals.md#google)
* [proto](globals.md#const-proto)

### Functions

* [mapAssistResponseToAssistantResponse](globals.md#mapassistresponsetoassistantresponse)
* [mapAssistantRequestToAssistRequest](globals.md#mapassistantrequesttoassistrequest)

## Type aliases

###  Action

Ƭ **Action**: *object*

#### Type declaration:

* \[ **key**: *string*\]: unknown

___

###  ActionOnGoogle

Ƭ **ActionOnGoogle**: *object*

#### Type declaration:

* \[ **key**: *string*\]: unknown

___

###  AssistConfig

Ƭ **AssistConfig**: *object & object | object*

___

###  AssistRequest

Ƭ **AssistRequest**: *object | object*

___

###  AssistantRequest

Ƭ **AssistantRequest**: *object | object & object | object & object*

___

###  ConversationEvent

Ƭ **ConversationEvent**: *"data" | "action" | "actionongoogle" | "audio" | "conversationend" | "message" | "html" | "volume" | "speechrecognition" | "utteranceend"*

TYPINGS

## Variables

### `Const` PROTO_ROOT_DIR

• **PROTO_ROOT_DIR**: *string* = getProtoPath('..')

___

### `Const` embeddedAssistantPb

• **embeddedAssistantPb**: *typeof EmbeddedAssistant* = google.assistant.embedded.v1alpha2.EmbeddedAssistant

___

###  google

• **google**: *any*

___

### `Const` proto

• **proto**: *any* = loadSync(
  'google/assistant/embedded/v1alpha2/embedded_assistant.proto',
  {
    includeDirs: [PROTO_ROOT_DIR],
  },
)

## Functions

###  mapAssistResponseToAssistantResponse

▸ **mapAssistResponseToAssistantResponse**(`__namedParameters`: object): *[AssistantResponse](interfaces/assistantresponse.md)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`audioOut` | [AudioOut](interfaces/audioout.md) |
`debugInfo` | [DebugInfo](interfaces/debuginfo.md) |
`deviceAction` | [DeviceAction](interfaces/deviceaction.md) |
`dialogStateOut` | [DialogStateOut](interfaces/dialogstateout.md) |
`eventType` | [AssistResponseEventType](enums/assistresponseeventtype.md) |
`screenOut` | [ScreenOut](interfaces/screenout.md) |
`speechResults` | [SpeechRecognitionResult](interfaces/speechrecognitionresult.md)[] |

**Returns:** *[AssistantResponse](interfaces/assistantresponse.md)*

___

###  mapAssistantRequestToAssistRequest

▸ **mapAssistantRequestToAssistRequest**(`__namedParameters`: object): *[AssistRequest](globals.md#assistrequest)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`audio` | Buffer‹› |
`audioInConfig` | [AudioInConfig](interfaces/audioinconfig.md) |
`audioOutConfig` | [AudioOutConfig](interfaces/audiooutconfig.md) |
`conversationState` | Buffer‹› |
`debug` | boolean |
`deviceId` | string |
`deviceLocation` | [LatLng](interfaces/latlng.md) |
`deviceModelId` | string |
`html` | boolean |
`isNewConversation` | boolean |
`locale` | [AssistantLanguage](enums/assistantlanguage.md) |
`text` | string |

**Returns:** *[AssistRequest](globals.md#assistrequest)*
