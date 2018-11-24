[Assistant SDK for Node.js](../README.md) > [TextConversation](../classes/textconversation.md)

# Class: TextConversation

## Hierarchy

↳  [Conversation](conversation.md)

**↳ TextConversation**

## Index

### Constructors

* [constructor](textconversation.md#constructor)

### Properties

* [_deviceId](textconversation.md#_deviceid)
* [_deviceModelId](textconversation.md#_devicemodelid)
* [locale](textconversation.md#locale)
* [defaultMaxListeners](textconversation.md#defaultmaxlisteners)

### Methods

* [addListener](textconversation.md#addlistener)
* [emit](textconversation.md#emit)
* [end](textconversation.md#end)
* [eventNames](textconversation.md#eventnames)
* [getMaxListeners](textconversation.md#getmaxlisteners)
* [listenerCount](textconversation.md#listenercount)
* [listeners](textconversation.md#listeners)
* [on](textconversation.md#on)
* [once](textconversation.md#once)
* [prependListener](textconversation.md#prependlistener)
* [prependOnceListener](textconversation.md#prependoncelistener)
* [rawListeners](textconversation.md#rawlisteners)
* [removeAllListeners](textconversation.md#removealllisteners)
* [removeListener](textconversation.md#removelistener)
* [send](textconversation.md#send)
* [sendRawRequest](textconversation.md#sendrawrequest)
* [sendRequest](textconversation.md#sendrequest)
* [setMaxListeners](textconversation.md#setmaxlisteners)
* [listenerCount](textconversation.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new TextConversation**(_stream: *`ClientDuplexStream`<[AssistRequest](../#assistrequest), [AssistResponse](../interfaces/assistresponse.md)>*, _deviceId: *`string`*, _deviceModelId: *`string`*, locale: *[AssistantLanguage](../enums/assistantlanguage.md)*): [TextConversation](textconversation.md)

Creates a new conversation.
*__constructor__*: 

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| _stream | `ClientDuplexStream`<[AssistRequest](../#assistrequest), [AssistResponse](../interfaces/assistresponse.md)> |  The duplex stream to use to communicate with the Assistant SDK. |
| _deviceId | `string` |  The device ID to use during this conversation. |
| _deviceModelId | `string` |  The device model ID to use during this conversation. |
| locale | [AssistantLanguage](../enums/assistantlanguage.md) |  The locale to use during this conversation. |

**Returns:** [TextConversation](textconversation.md)

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

▸ **send**(text: *`string`*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

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

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event |  `string` &#124; `symbol`|

**Returns:** `number`

___

