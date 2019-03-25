[Assistant SDK for Node.js](../README.md) > [Conversation](../classes/conversation.md)

# Class: Conversation

Represents a conversation with the Assistant.

*__author__*: Giorgio Garasto [giorgio@garasto.it](mailto:giorgio@garasto.it)

*__license__*: MIT

*__class__*: 

## Hierarchy

 `EventEmitter`

**↳ Conversation**

↳  [AudioConversation](audioconversation.md)

↳  [TextConversation](textconversation.md)

## Index

### Constructors

* [constructor](conversation.md#constructor)

### Properties

* [_deviceId](conversation.md#_deviceid)
* [_deviceModelId](conversation.md#_devicemodelid)
* [_stream](conversation.md#_stream)
* [locale](conversation.md#locale)
* [defaultMaxListeners](conversation.md#defaultmaxlisteners)

### Methods

* [_setupEvents](conversation.md#_setupevents)
* [addListener](conversation.md#addlistener)
* [emit](conversation.md#emit)
* [end](conversation.md#end)
* [eventNames](conversation.md#eventnames)
* [getMaxListeners](conversation.md#getmaxlisteners)
* [listenerCount](conversation.md#listenercount)
* [listeners](conversation.md#listeners)
* [off](conversation.md#off)
* [on](conversation.md#on)
* [once](conversation.md#once)
* [prependListener](conversation.md#prependlistener)
* [prependOnceListener](conversation.md#prependoncelistener)
* [rawListeners](conversation.md#rawlisteners)
* [removeAllListeners](conversation.md#removealllisteners)
* [removeListener](conversation.md#removelistener)
* [sendRawRequest](conversation.md#sendrawrequest)
* [sendRequest](conversation.md#sendrequest)
* [setMaxListeners](conversation.md#setmaxlisteners)
* [listenerCount](conversation.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Conversation**(_stream: *`ClientDuplexStream`<[AssistRequest](../#assistrequest), [AssistResponse](../interfaces/assistresponse.md)>*, _deviceId: *`string`*, _deviceModelId: *`string`*, locale: *[AssistantLanguage](../enums/assistantlanguage.md)*): [Conversation](conversation.md)

Creates a new conversation.

*__constructor__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| _stream | `ClientDuplexStream`<[AssistRequest](../#assistrequest), [AssistResponse](../interfaces/assistresponse.md)> |  The duplex stream to use to communicate with the Assistant SDK. |
| _deviceId | `string` |  The device ID to use during this conversation. |
| _deviceModelId | `string` |  The device model ID to use during this conversation. |
| locale | [AssistantLanguage](../enums/assistantlanguage.md) |  The locale to use during this conversation. |

**Returns:** [Conversation](conversation.md)

___

## Properties

<a id="_deviceid"></a>

### `<Protected>` _deviceId

**● _deviceId**: *`string`*

The device ID to use during this conversation.

___
<a id="_devicemodelid"></a>

### `<Protected>` _deviceModelId

**● _deviceModelId**: *`string`*

The device model ID to use during this conversation.

___
<a id="_stream"></a>

### `<Private>` _stream

**● _stream**: *`ClientDuplexStream`<[AssistRequest](../#assistrequest), [AssistResponse](../interfaces/assistresponse.md)>*

The duplex stream to use to communicate with the Assistant SDK.

___
<a id="locale"></a>

###  locale

**● locale**: *[AssistantLanguage](../enums/assistantlanguage.md)*

The locale to use during this conversation.

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

___

## Methods

<a id="_setupevents"></a>

### `<Private>` _setupEvents

▸ **_setupEvents**(): `void`

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

▸ **addListener**(event: *"data"*, listener: *`function`*): `this`

▸ **addListener**(event: *"action"*, listener: *`function`*): `this`

▸ **addListener**(event: *"actionongoogle"*, listener: *`function`*): `this`

▸ **addListener**(event: *"audio"*, listener: *`function`*): `this`

▸ **addListener**(event: *"conversationend"*, listener: *`function`*): `this`

▸ **addListener**(event: *"message"*, listener: *`function`*): `this`

▸ **addListener**(event: *"html"*, listener: *`function`*): `this`

▸ **addListener**(event: *"volume"*, listener: *`function`*): `this`

▸ **addListener**(event: *"speechrecognition"*, listener: *`function`*): `this`

▸ **addListener**(event: *"utteranceend"*, listener: *`function`*): `this`

▸ **addListener**(event: *"end"*, listener: *`function`*): `this`

▸ **addListener**(event: *"close"*, listener: *`function`*): `this`

▸ **addListener**(event: *"error"*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

Adds an event listener that will be triggered when the Assistant sends any type of data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "data" |  The 'data' event. |
| listener | `function` |  A callback that will receive the Assistant data as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered if the user has triggered a Device Action. For example, a device which supports the query _Turn on the light_ would receive an object containing the semantics of the request.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "action" |  The 'action' event. |
| listener | `function` |  A callback that will receive the object containing the semantics of the request as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered with the original response from an Action-on-Google agent to Google server. To be able to receive this data, the conversation has to be in debug mode, the request maker has to own the AoG project and the AoG project has to be in preview mode.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "actionongoogle" |  The 'actionongoogle' event. |
| listener | `function` |  A callback that will receive the original response from the AoG agent as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends an audio message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "audio" |  The 'audio' event. |
| listener | `function` |  A callback that will receive the Assistant audio message as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the conversation with the Assistant ends.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "conversationend" |  The 'conversationend' event. |
| listener | `function` |  A callback that will receive the latest Assistant response as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends a text message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "message" |  The 'message' event. |
| listener | `function` |  A callback that will receive the Assistant text message as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends HTML data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "html" |  The 'html' event. |
| listener | `function` |  A callback that will receive the HTML data as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends the new device volume level.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "volume" |  The 'volume' event. |
| listener | `function` |  A callback that will receive the new device volume level as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered with the Assistant speech recognition results.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "speechrecognition" |  The 'speechrecognition' event. |
| listener | `function` |  A callback that will receive the Assistant speech recognition results as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant detects the end of the user's speech utterance and expects no additional speech. Therefore, it will not process additional audio (although it may subsequently return additional results).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "utteranceend" |  The 'utteranceend' event. |
| listener | `function` |  A callback that will receive the latest Assistant response as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant closes the connection, thus not sending any more data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "end" |  The 'end' event. |
| listener | `function` |  A callback with no params. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the connection with the Assistant is fully closed.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "close" |  The 'end' event. |
| listener | `function` |  A callback with no params. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when any type of error occurs.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "error" |  The 'error' event. |
| listener | `function` |  A callback that will receive the error as param. |

**Returns:** `this`
The conversation.

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

▸ **emit**(event: *"data"*, data: *[AssistantResponse](../interfaces/assistantresponse.md)*): `boolean`

▸ **emit**(event: *"action"*, action: *`unknown`*): `boolean`

▸ **emit**(event: *"actionongoogle"*, actionOnGoogle: *`unknown`*): `boolean`

▸ **emit**(event: *"audio"*, audio: *`Buffer`*): `boolean`

▸ **emit**(event: *"conversationend"*, latestData: *[AssistantResponse](../interfaces/assistantresponse.md)*): `boolean`

▸ **emit**(event: *"message"*, text: *`string`*): `boolean`

▸ **emit**(event: *"html"*, html: *`string`*): `boolean`

▸ **emit**(event: *"volume"*, newVolume: *`number`*): `boolean`

▸ **emit**(event: *"speechrecognition"*, speechRecognitionResults: *[AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[]*): `boolean`

▸ **emit**(event: *"utteranceend"*, latestData: *[AssistantResponse](../interfaces/assistantresponse.md)*): `boolean`

▸ **emit**(event: *"end"*): `boolean`

▸ **emit**(event: *"close"*): `boolean`

▸ **emit**(event: *"error"*, error: *`Error`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "data" |
| data | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "action" |
| action | `unknown` |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "actionongoogle" |
| actionOnGoogle | `unknown` |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "audio" |
| audio | `Buffer` |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "conversationend" |
| latestData | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "message" |
| text | `string` |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "html" |
| html | `string` |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "volume" |
| newVolume | `number` |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "speechrecognition" |
| speechRecognitionResults | [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[] |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "utteranceend" |
| latestData | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "end" |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "close" |

**Returns:** `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "error" |
| error | `Error` |

**Returns:** `boolean`

___
<a id="end"></a>

###  end

▸ **end**(): `Promise`<`void`>

**Returns:** `Promise`<`void`>

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

▸ **eventNames**(): [ConversationEvent](../#conversationevent)[]

**Returns:** `Array`<`string` \| `symbol`>

**Returns:** [ConversationEvent](../#conversationevent)[]

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

▸ **getMaxListeners**(): `number`

**Returns:** `number`

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

▸ **listenerCount**(type: *[ConversationEvent](../#conversationevent)*): `number`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | [ConversationEvent](../#conversationevent) |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

▸ **listeners**(event: *[ConversationEvent](../#conversationevent)*): `Array`<`function`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [ConversationEvent](../#conversationevent) |

**Returns:** `Array`<`function`>

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

▸ **on**(event: *"data"*, listener: *`function`*): `this`

▸ **on**(event: *"action"*, listener: *`function`*): `this`

▸ **on**(event: *"actionongoogle"*, listener: *`function`*): `this`

▸ **on**(event: *"audio"*, listener: *`function`*): `this`

▸ **on**(event: *"conversationend"*, listener: *`function`*): `this`

▸ **on**(event: *"message"*, listener: *`function`*): `this`

▸ **on**(event: *"html"*, listener: *`function`*): `this`

▸ **on**(event: *"volume"*, listener: *`function`*): `this`

▸ **on**(event: *"speechrecognition"*, listener: *`function`*): `this`

▸ **on**(event: *"utteranceend"*, listener: *`function`*): `this`

▸ **on**(event: *"end"*, listener: *`function`*): `this`

▸ **on**(event: *"close"*, listener: *`function`*): `this`

▸ **on**(event: *"error"*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

Adds an event listener that will be triggered when the Assistant sends any type of data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "data" |  The 'data' event. |
| listener | `function` |  A callback that will receive the Assistant data as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered if the user has triggered a Device Action. For example, a device which supports the query _Turn on the light_ would receive an object containing the semantics of the request.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "action" |  The 'action' event. |
| listener | `function` |  A callback that will receive the object containing the semantics of the request as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered with the original response from an Action-on-Google agent to Google server. To be able to receive this data, the conversation has to be in debug mode, the request maker has to own the AoG project and the AoG project has to be in preview mode.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "actionongoogle" |  The 'actionongoogle' event. |
| listener | `function` |  A callback that will receive the original response from the AoG agent as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends an audio message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "audio" |  The 'audio' event. |
| listener | `function` |  A callback that will receive the Assistant audio message as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the conversation with the Assistant ends.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "conversationend" |  The 'conversationend' event. |
| listener | `function` |  A callback that will receive the latest Assistant response as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends a text message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "message" |  The 'message' event. |
| listener | `function` |  A callback that will receive the Assistant text message as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends HTML data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "html" |  The 'html' event. |
| listener | `function` |  A callback that will receive the HTML data as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant sends the new device volume level.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "volume" |  The 'volume' event. |
| listener | `function` |  A callback that will receive the new device volume level as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered with the Assistant speech recognition results.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "speechrecognition" |  The 'speechrecognition' event. |
| listener | `function` |  A callback that will receive the Assistant speech recognition results as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant detects the end of the user's speech utterance and expects no additional speech. Therefore, it will not process additional audio (although it may subsequently return additional results).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "utteranceend" |  The 'utteranceend' event. |
| listener | `function` |  A callback that will receive the latest Assistant response as param. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the Assistant closes the connection, thus not sending any more data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "end" |  The 'end' event. |
| listener | `function` |  A callback with no params. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when the connection with the Assistant is fully closed.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "close" |  The 'end' event. |
| listener | `function` |  A callback with no params. |

**Returns:** `this`
The conversation.

Adds an event listener that will be triggered when any type of error occurs.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "error" |  The 'error' event. |
| listener | `function` |  A callback that will receive the error as param. |

**Returns:** `this`
The conversation.

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

▸ **once**(event: *"data"*, listener: *`function`*): `this`

▸ **once**(event: *"action"*, listener: *`function`*): `this`

▸ **once**(event: *"actionongoogle"*, listener: *`function`*): `this`

▸ **once**(event: *"audio"*, listener: *`function`*): `this`

▸ **once**(event: *"conversationend"*, listener: *`function`*): `this`

▸ **once**(event: *"message"*, listener: *`function`*): `this`

▸ **once**(event: *"html"*, listener: *`function`*): `this`

▸ **once**(event: *"volume"*, listener: *`function`*): `this`

▸ **once**(event: *"speechrecognition"*, listener: *`function`*): `this`

▸ **once**(event: *"utteranceend"*, listener: *`function`*): `this`

▸ **once**(event: *"end"*, listener: *`function`*): `this`

▸ **once**(event: *"close"*, listener: *`function`*): `this`

▸ **once**(event: *"error"*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

Adds a one time event listener that will be triggered when the Assistant sends any type of data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "data" |  The 'data' event. |
| listener | `function` |  A callback that will receive the Assistant data as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered if the user has triggered a Device Action. For example, a device which supports the query _Turn on the light_ would receive an object containing the semantics of the request.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "action" |  The 'action' event. |
| listener | `function` |  A callback that will receive the object containing the semantics of the request as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered with the original response from an Action-on-Google agent to Google server. To be able to receive this data, the conversation has to be in debug mode, the request maker has to own the AoG project and the AoG project has to be in preview mode.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "actionongoogle" |  The 'actionongoogle' event. |
| listener | `function` |  A callback that will receive the original response from the AoG agent as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the Assistant sends an audio message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "audio" |  The 'audio' event. |
| listener | `function` |  A callback that will receive the Assistant audio message as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the conversation with the Assistant ends.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "conversationend" |  The 'conversationend' event. |
| listener | `function` |  A callback that will receive the latest Assistant response as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the Assistant sends a text message.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "message" |  The 'message' event. |
| listener | `function` |  A callback that will receive the Assistant text message as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the Assistant sends HTML data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "html" |  The 'html' event. |
| listener | `function` |  A callback that will receive the HTML data as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the Assistant sends the new device volume level.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "volume" |  The 'volume' event. |
| listener | `function` |  A callback that will receive the new device volume level as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered with the Assistant speech recognition results.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "speechrecognition" |  The 'speechrecognition' event. |
| listener | `function` |  A callback that will receive the Assistant speech recognition results as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the Assistant detects the end of the user's speech utterance and expects no additional speech. Therefore, it will not process additional audio (although it may subsequently return additional results).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "utteranceend" |  The 'utteranceend' event. |
| listener | `function` |  A callback that will receive the latest Assistant response as param. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the Assistant closes the connection, thus not sending any more data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "end" |  The 'end' event. |
| listener | `function` |  A callback with no params. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when the connection with the Assistant is fully closed.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "close" |  The 'end' event. |
| listener | `function` |  A callback with no params. |

**Returns:** `this`
The conversation.

Adds a one time event listener that will be triggered when any type of error occurs.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| event | "error" |  The 'error' event. |
| listener | `function` |  A callback that will receive the error as param. |

**Returns:** `this`
The conversation.

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

▸ **prependListener**(event: *[ConversationEvent](../#conversationevent)*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [ConversationEvent](../#conversationevent) |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

▸ **prependOnceListener**(event: *[ConversationEvent](../#conversationevent)*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [ConversationEvent](../#conversationevent) |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

▸ **rawListeners**(event: *[ConversationEvent](../#conversationevent)*): `Array`<`function`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [ConversationEvent](../#conversationevent) |

**Returns:** `Array`<`function`>

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

▸ **removeAllListeners**(event?: *[ConversationEvent](../#conversationevent)*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | [ConversationEvent](../#conversationevent) |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

▸ **removeListener**(event: *[ConversationEvent](../#conversationevent)*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | [ConversationEvent](../#conversationevent) |
| listener | `function` |

**Returns:** `this`

___
<a id="sendrawrequest"></a>

###  sendRawRequest

▸ **sendRawRequest**(rawRequest: *[AssistRequest](../#assistrequest)*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| rawRequest | [AssistRequest](../#assistrequest) |

**Returns:** `boolean`

___
<a id="sendrequest"></a>

###  sendRequest

▸ **sendRequest**(request: *[AssistantRequest](../#assistantrequest)*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| request | [AssistantRequest](../#assistantrequest) |

**Returns:** `boolean`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

▸ **setMaxListeners**(n: *`number`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

