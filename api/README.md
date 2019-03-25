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

* [AssistConfig](#assistconfig)
* [AssistRequest](#assistrequest)
* [AssistantRequest](#assistantrequest)
* [ConversationEvent](#conversationevent)

### Variables

* [PROTO_ROOT_DIR](#proto_root_dir)
* [embeddedAssistantPb](#embeddedassistantpb)
* [google](#google)
* [proto](#proto)

### Functions

* [mapAssistResponseToAssistantResponse](#mapassistresponsetoassistantresponse)
* [mapAssistantRequestToAssistRequest](#mapassistantrequesttoassistrequest)

---

## Type aliases

<a id="assistconfig"></a>

###  AssistConfig

**Ƭ AssistConfig**: *`object` & `object` \| `object`*

___
<a id="assistrequest"></a>

###  AssistRequest

**Ƭ AssistRequest**: *`object` \| `object`*

___
<a id="assistantrequest"></a>

###  AssistantRequest

**Ƭ AssistantRequest**: *`object` \| `object` & `object` \| `object` & `object`*

___
<a id="conversationevent"></a>

###  ConversationEvent

**Ƭ ConversationEvent**: *"data" \| "action" \| "actionongoogle" \| "audio" \| "conversationend" \| "message" \| "html" \| "volume" \| "speechrecognition" \| "utteranceend"*

TYPINGS

___

## Variables

<a id="proto_root_dir"></a>

### `<Const>` PROTO_ROOT_DIR

**● PROTO_ROOT_DIR**: *`any`* =  protoFiles('..')

___
<a id="embeddedassistantpb"></a>

### `<Const>` embeddedAssistantPb

**● embeddedAssistantPb**: *[EmbeddedAssistant](classes/embeddedassistant.md)* =  google.assistant.embedded.v1alpha2.EmbeddedAssistant

___
<a id="google"></a>

###  google

**● google**: *`any`*

___
<a id="proto"></a>

### `<Const>` proto

**● proto**: *`any`* =  loadSync('google/assistant/embedded/v1alpha2/embedded_assistant.proto', {
  includeDirs: [PROTO_ROOT_DIR],
})

___

## Functions

<a id="mapassistresponsetoassistantresponse"></a>

###  mapAssistResponseToAssistantResponse

▸ **mapAssistResponseToAssistantResponse**(__namedParameters: *`object`*): [AssistantResponse](interfaces/assistantresponse.md)

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| audioOut | [AudioOut](interfaces/audioout.md) |
| debugInfo | [DebugInfo](interfaces/debuginfo.md) |
| deviceAction | [DeviceAction](interfaces/deviceaction.md) |
| dialogStateOut | [DialogStateOut](interfaces/dialogstateout.md) |
| eventType | [AssistResponseEventType](enums/assistresponseeventtype.md) |
| screenOut | [ScreenOut](interfaces/screenout.md) |
| speechResults | [SpeechRecognitionResult](interfaces/speechrecognitionresult.md)[] |

**Returns:** [AssistantResponse](interfaces/assistantresponse.md)

___
<a id="mapassistantrequesttoassistrequest"></a>

###  mapAssistantRequestToAssistRequest

▸ **mapAssistantRequestToAssistRequest**(__namedParameters: *`object`*): [AssistRequest](#assistrequest)

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| audio | `Buffer` |
| audioInConfig | [AudioInConfig](interfaces/audioinconfig.md) |
| audioOutConfig | [AudioOutConfig](interfaces/audiooutconfig.md) |
| conversationState | `Buffer` |
| debug | `boolean` |
| deviceId | `string` |
| deviceLocation | [LatLng](interfaces/latlng.md) |
| deviceModelId | `string` |
| html | `boolean` |
| isNewConversation | `boolean` |
| locale | [AssistantLanguage](enums/assistantlanguage.md) |
| text | `string` |

**Returns:** [AssistRequest](#assistrequest)

___

