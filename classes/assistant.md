[Assistant SDK for Node.js](../README.md) > [Assistant](../classes/assistant.md)

# Class: Assistant

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

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| credentials | `JWTInput` | - |
| `Default value` options | [AssistantOptions](../interfaces/assistantoptions.md) |  {deviceId: &#x27;default&#x27;,deviceModelId: &#x27;default&#x27;,locale: AssistantLanguage.ENGLISH,} |

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

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `Promise`<[AssistantResponse](../interfaces/assistantresponse.md)>

___
<a id="startaudioconversation"></a>

###  startAudioConversation

▸ **startAudioConversation**(audioInConfig: *[AudioInConfig](../interfaces/audioinconfig.md)*, audioOutConfig: *[AudioOutConfig](../interfaces/audiooutconfig.md)*): [AudioConversation](audioconversation.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| audioInConfig | [AudioInConfig](../interfaces/audioinconfig.md) |
| audioOutConfig | [AudioOutConfig](../interfaces/audiooutconfig.md) |

**Returns:** [AudioConversation](audioconversation.md)

___
<a id="starttextconversation"></a>

###  startTextConversation

▸ **startTextConversation**(): [TextConversation](textconversation.md)

**Returns:** [TextConversation](textconversation.md)

___

