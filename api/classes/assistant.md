[Assistant SDK for Node.js](../README.md) > [Assistant](../classes/assistant.md)

# Class: Assistant

The base class to connect with the Assistant.

*__author__*: Giorgio Garasto [giorgio@garasto.it](mailto:giorgio@garasto.it)

*__license__*: MIT

*__class__*: 

## Hierarchy

**Assistant**

## Index

### Constructors

* [constructor](assistant.md#constructor)

### Properties

* [_client](assistant.md#_client)
* [_endpoint](assistant.md#_endpoint)
* [deviceId](assistant.md#deviceid)
* [deviceModelId](assistant.md#devicemodelid)
* [locale](assistant.md#locale)

### Methods

* [_createClient](assistant.md#_createclient)
* [query](assistant.md#query)
* [startAudioConversation](assistant.md#startaudioconversation)
* [startTextConversation](assistant.md#starttextconversation)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Assistant**(credentials: *`JWTInput`*, options?: *[AssistantOptions](../interfaces/assistantoptions.md)*): [Assistant](assistant.md)

Creates a new connection with the assistant.

*__constructor__*: 

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| credentials | `JWTInput` | - |  The credentials to use to authenticate with the Assistant. |
| `Default value` options | [AssistantOptions](../interfaces/assistantoptions.md) |  {deviceId: &#x27;default&#x27;,deviceModelId: &#x27;default&#x27;,locale: AssistantLanguage.ENGLISH,} |  Some additional (optional) options. |

**Returns:** [Assistant](assistant.md)

___

## Properties

<a id="_client"></a>

### `<Private>` _client

**● _client**: *`EmbeddedAssistantInstance`*

___
<a id="_endpoint"></a>

### `<Private>` _endpoint

**● _endpoint**: *`string`* = "embeddedassistant.googleapis.com"

___
<a id="deviceid"></a>

###  deviceId

**● deviceId**: *`string`*

___
<a id="devicemodelid"></a>

###  deviceModelId

**● deviceModelId**: *`string`*

___
<a id="locale"></a>

###  locale

**● locale**: *[AssistantLanguage](../enums/assistantlanguage.md)*

___

## Methods

<a id="_createclient"></a>

### `<Private>` _createClient

▸ **_createClient**(credentials: *`JWTInput`*): `EmbeddedAssistantInstance`

**Parameters:**

| Name | Type |
| ------ | ------ |
| credentials | `JWTInput` |

**Returns:** `EmbeddedAssistantInstance`

___
<a id="query"></a>

###  query

▸ **query**(text: *`string`*): `Promise`<[AssistantResponse](../interfaces/assistantresponse.md)>

Sends a single text query to the Assistant and wait for its response.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| text | `string` |  The text query to send to the Assistant. |

**Returns:** `Promise`<[AssistantResponse](../interfaces/assistantresponse.md)>
A promise that resolves to the Assistant response.

___
<a id="startaudioconversation"></a>

###  startAudioConversation

▸ **startAudioConversation**(audioInConfig: *[AudioInConfig](../interfaces/audioinconfig.md)*, audioOutConfig: *[AudioOutConfig](../interfaces/audiooutconfig.md)*): [AudioConversation](audioconversation.md)

Starts a new audio conversation with the Assistant.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| audioInConfig | [AudioInConfig](../interfaces/audioinconfig.md) |  The audio input configuration. |
| audioOutConfig | [AudioOutConfig](../interfaces/audiooutconfig.md) |  The audio output configuration. |

**Returns:** [AudioConversation](audioconversation.md)
The new audio conversation.

___
<a id="starttextconversation"></a>

###  startTextConversation

▸ **startTextConversation**(): [TextConversation](textconversation.md)

Starts a new text conversation with the Assistant.

**Returns:** [TextConversation](textconversation.md)
The new text conversation.

___

