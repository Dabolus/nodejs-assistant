[Assistant SDK for Node.js](../README.md) > [AudioConversation](../classes/audioconversation.md)

# Class: AudioConversation

Represents an audio conversation with the Assistant.
*__author__*: Giorgio Garasto [giorgio@garasto.it](mailto:giorgio@garasto.it)

*__license__*: MIT

*__class__*: 

## Hierarchy

↳  [Conversation](conversation.md)

**↳ AudioConversation**

## Index

### Constructors

* [constructor](audioconversation.md#constructor)

### Properties

* [_deviceId](audioconversation.md#_deviceid)
* [_deviceModelId](audioconversation.md#_devicemodelid)
* [locale](audioconversation.md#locale)
* [defaultMaxListeners](audioconversation.md#defaultmaxlisteners)

### Methods

* [addListener](audioconversation.md#addlistener)
* [emit](audioconversation.md#emit)
* [end](audioconversation.md#end)
* [eventNames](audioconversation.md#eventnames)
* [getMaxListeners](audioconversation.md#getmaxlisteners)
* [listenerCount](audioconversation.md#listenercount)
* [listeners](audioconversation.md#listeners)
* [off](audioconversation.md#off)
* [on](audioconversation.md#on)
* [once](audioconversation.md#once)
* [prependListener](audioconversation.md#prependlistener)
* [prependOnceListener](audioconversation.md#prependoncelistener)
* [rawListeners](audioconversation.md#rawlisteners)
* [removeAllListeners](audioconversation.md#removealllisteners)
* [removeListener](audioconversation.md#removelistener)
* [send](audioconversation.md#send)
* [sendRawRequest](audioconversation.md#sendrawrequest)
* [sendRequest](audioconversation.md#sendrequest)
* [setMaxListeners](audioconversation.md#setmaxlisteners)
* [listenerCount](audioconversation.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AudioConversation**(_stream: *`ClientDuplexStream`<[AssistRequest](../#assistrequest), [AssistResponse](../interfaces/assistresponse.md)>*, _deviceId: *`string`*, _deviceModelId: *`string`*, locale: *[AssistantLanguage](../enums/assistantlanguage.md)*, audioInConfig: *[AudioInConfig](../interfaces/audioinconfig.md)*, audioOutConfig: *[AudioOutConfig](../interfaces/audiooutconfig.md)*): [AudioConversation](audioconversation.md)

Creates a new audio conversation.
*__constructor__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| _stream | `ClientDuplexStream`<[AssistRequest](../#assistrequest), [AssistResponse](../interfaces/assistresponse.md)> |  The duplex stream to use to communicate with the Assistant SDK. |
| _deviceId | `string` |  The device ID to use during this conversation. |
| _deviceModelId | `string` |  The device model ID to use during this conversation. |
| locale | [AssistantLanguage](../enums/assistantlanguage.md) |  The locale to use during this conversation. |
| audioInConfig | [AudioInConfig](../interfaces/audioinconfig.md) |  The audio input configuration. |
| audioOutConfig | [AudioOutConfig](../interfaces/audiooutconfig.md) |  The audio output configuration. |

**Returns:** [AudioConversation](audioconversation.md)

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

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: * `string` &#124; `symbol`*, ...args: *`any`[]*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="end"></a>

###  end

▸ **end**(): `Promise`<`void`>

**Returns:** `Promise`<`void`>

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`< `string` &#124; `symbol`>

**Returns:** `Array`< `string` &#124; `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

**Returns:** `number`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: * `string` &#124; `symbol`*): `number`

**Parameters:**

| Name | Type |
| ------ | ------ |
| type |  `string` &#124; `symbol`|

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: * `string` &#124; `symbol`*): `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: * `string` &#124; `symbol`*): `Function`[]

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: * `string` &#124; `symbol`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event |  `string` &#124; `symbol`|

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: * `string` &#124; `symbol`*, listener: *`function`*): `this`

**Parameters:**

| Name | Type |
| ------ | ------ |
| event |  `string` &#124; `symbol`|
| listener | `function` |

**Returns:** `this`

___
<a id="send"></a>

###  send

▸ **send**(audio: *`Buffer`*): `boolean`

Sends audio to the Assistant.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| audio | `Buffer` |  The audio buffer to send to the Assistant. |

**Returns:** `boolean`
A boolean that tells whether the audio buffer was successfully sent or not.

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

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: * `string` &#124; `symbol`*): `number`

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event |  `string` &#124; `symbol`|

**Returns:** `number`

___

