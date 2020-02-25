[Assistant SDK for Node.js](../README.md) › [Globals](../globals.md) › [Assistant](assistant.md)

# Class: Assistant

The base class to connect with the Assistant.

**`author`** Giorgio Garasto <giorgio@garasto.it>

**`license`** MIT

## Hierarchy

* **Assistant**

## Index

### Constructors

* [constructor](assistant.md#constructor)

### Properties

* [_client](assistant.md#private-_client)
* [_endpoint](assistant.md#private-_endpoint)
* [deviceId](assistant.md#deviceid)
* [deviceModelId](assistant.md#devicemodelid)
* [locale](assistant.md#locale)

### Methods

* [_createClient](assistant.md#private-_createclient)
* [query](assistant.md#query)
* [startAudioConversation](assistant.md#startaudioconversation)
* [startTextConversation](assistant.md#starttextconversation)

## Constructors

###  constructor

\+ **new Assistant**(`credentials`: JWTInput, `options`: [AssistantOptions](../interfaces/assistantoptions.md)): *[Assistant](assistant.md)*

Creates a new connection with the assistant.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`credentials` | JWTInput | - | The credentials to use to authenticate with the Assistant. |
`options` | [AssistantOptions](../interfaces/assistantoptions.md) | {
      deviceId: 'default',
      deviceModelId: 'default',
      locale: AssistantLanguage.ENGLISH,
    } | Some additional (optional) options. |

**Returns:** *[Assistant](assistant.md)*

## Properties

### `Private` _client

• **_client**: *EmbeddedAssistantInstance*

___

### `Private` _endpoint

• **_endpoint**: *string* = "embeddedassistant.googleapis.com"

___

###  deviceId

• **deviceId**: *string*

___

###  deviceModelId

• **deviceModelId**: *string*

___

###  locale

• **locale**: *[AssistantLanguage](../enums/assistantlanguage.md)*

## Methods

### `Private` _createClient

▸ **_createClient**(`credentials`: JWTInput): *EmbeddedAssistantInstance*

**Parameters:**

Name | Type |
------ | ------ |
`credentials` | JWTInput |

**Returns:** *EmbeddedAssistantInstance*

___

###  query

▸ **query**(`textOrAudio`: string | Buffer, `__namedParameters`: object): *Promise‹[AssistantResponse](../interfaces/assistantresponse.md)›*

Sends a single text query to the Assistant and wait for its response.

**Parameters:**

▪ **textOrAudio**: *string | Buffer*

The text query or the audio buffer to send to the Assistant.

▪`Default value`  **__namedParameters**: *object*= {
      audioInConfig: {
        encoding: AudioInEncoding.LINEAR16,
        sampleRateHertz: 16000,
      },
      audioOutConfig: {
        encoding: AudioOutEncoding.LINEAR16,
        sampleRateHertz: 16000,
        volumePercentage: 100,
      },
    }

Name | Type |
------ | ------ |
`audioInConfig` | [AudioInConfig](../interfaces/audioinconfig.md) |
`audioOutConfig` | [AudioOutConfig](../interfaces/audiooutconfig.md) |
`conversationState` | Buffer‹› |

**Returns:** *Promise‹[AssistantResponse](../interfaces/assistantresponse.md)›*

A promise that resolves to the Assistant response.

___

###  startAudioConversation

▸ **startAudioConversation**(`audioInConfig`: [AudioInConfig](../interfaces/audioinconfig.md), `audioOutConfig`: [AudioOutConfig](../interfaces/audiooutconfig.md)): *[AudioConversation](audioconversation.md)*

Starts a new audio conversation with the Assistant.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`audioInConfig` | [AudioInConfig](../interfaces/audioinconfig.md) | {
      encoding: AudioInEncoding.LINEAR16,
      sampleRateHertz: 16000,
    } | The audio input configuration. |
`audioOutConfig` | [AudioOutConfig](../interfaces/audiooutconfig.md) | {
      encoding: AudioOutEncoding.LINEAR16,
      sampleRateHertz: 16000,
      volumePercentage: 100,
    } | The audio output configuration. |

**Returns:** *[AudioConversation](audioconversation.md)*

The new audio conversation.

___

###  startTextConversation

▸ **startTextConversation**(`audioOutConfig`: [AudioOutConfig](../interfaces/audiooutconfig.md)): *[TextConversation](textconversation.md)*

Starts a new text conversation with the Assistant.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`audioOutConfig` | [AudioOutConfig](../interfaces/audiooutconfig.md) | {
      encoding: AudioOutEncoding.LINEAR16,
      sampleRateHertz: 16000,
      volumePercentage: 100,
    } | The audio output configuration. |

**Returns:** *[TextConversation](textconversation.md)*

The new text conversation.
