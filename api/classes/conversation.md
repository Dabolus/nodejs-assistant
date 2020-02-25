[Assistant SDK for Node.js](../README.md) › [Globals](../globals.md) › [Conversation](conversation.md)

# Class: Conversation

Represents a conversation with the Assistant.

**`author`** Giorgio Garasto <giorgio@garasto.it>

**`license`** MIT

## Hierarchy

* EventEmitter

  ↳ **Conversation**

  ↳ [AudioConversation](audioconversation.md)

  ↳ [TextConversation](textconversation.md)

## Index

### Constructors

* [constructor](conversation.md#constructor)

### Properties

* [_deviceId](conversation.md#protected-_deviceid)
* [_deviceModelId](conversation.md#protected-_devicemodelid)
* [_stream](conversation.md#private-_stream)
* [locale](conversation.md#locale)
* [defaultMaxListeners](conversation.md#static-defaultmaxlisteners)

### Methods

* [_setupEvents](conversation.md#private-_setupevents)
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
* [listenerCount](conversation.md#static-listenercount)

## Constructors

###  constructor

\+ **new Conversation**(`_stream`: ClientDuplexStream‹[AssistRequest](../globals.md#assistrequest), [AssistResponse](../interfaces/assistresponse.md)›, `_deviceId`: string, `_deviceModelId`: string, `locale`: [AssistantLanguage](../enums/assistantlanguage.md)): *[Conversation](conversation.md)*

*Overrides void*

Creates a new conversation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`_stream` | ClientDuplexStream‹[AssistRequest](../globals.md#assistrequest), [AssistResponse](../interfaces/assistresponse.md)› | The duplex stream to use to communicate with the Assistant SDK. |
`_deviceId` | string | The device ID to use during this conversation. |
`_deviceModelId` | string | The device model ID to use during this conversation. |
`locale` | [AssistantLanguage](../enums/assistantlanguage.md) | The locale to use during this conversation. |

**Returns:** *[Conversation](conversation.md)*

## Properties

### `Protected` _deviceId

• **_deviceId**: *string*

The device ID to use during this conversation.

___

### `Protected` _deviceModelId

• **_deviceModelId**: *string*

The device model ID to use during this conversation.

___

### `Private` _stream

• **_stream**: *ClientDuplexStream‹[AssistRequest](../globals.md#assistrequest), [AssistResponse](../interfaces/assistresponse.md)›*

The duplex stream to use to communicate with the Assistant SDK.

___

###  locale

• **locale**: *[AssistantLanguage](../enums/assistantlanguage.md)*

The locale to use during this conversation.

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [Conversation](conversation.md).[defaultMaxListeners](conversation.md#static-defaultmaxlisteners)*

## Methods

### `Private` _setupEvents

▸ **_setupEvents**(): *void*

**Returns:** *void*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **addListener**(`event`: "data", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the Assistant sends any type of data.

**Parameters:**

▪ **event**: *"data"*

The 'data' event.

▪ **listener**: *function*

A callback that will receive the Assistant data as param.

▸ (`data`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "action", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered if the user has triggered a Device Action.
For example, a device which supports the query *Turn on the light* would receive an
object containing the semantics of the request.

**Parameters:**

▪ **event**: *"action"*

The 'action' event.

▪ **listener**: *function*

A callback that will receive the object containing the semantics of the request as param.

▸ (`action`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | unknown |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "actionongoogle", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered with the original response from an
Action-on-Google agent to Google server. To be able to receive this data, the conversation
has to be in debug mode, the request maker has to own the AoG project and the AoG project
has to be in preview mode.

**Parameters:**

▪ **event**: *"actionongoogle"*

The 'actionongoogle' event.

▪ **listener**: *function*

A callback that will receive the original response from the AoG agent as param.

▸ (`actionOnGoogle`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`actionOnGoogle` | unknown |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "audio", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the Assistant sends an audio message.

**Parameters:**

▪ **event**: *"audio"*

The 'audio' event.

▪ **listener**: *function*

A callback that will receive the Assistant audio message as param.

▸ (`audio`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`audio` | Buffer |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "conversationend", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the conversation with the Assistant ends.

**Parameters:**

▪ **event**: *"conversationend"*

The 'conversationend' event.

▪ **listener**: *function*

A callback that will receive the latest Assistant response as param.

▸ (`latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "message", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the Assistant sends a text message.

**Parameters:**

▪ **event**: *"message"*

The 'message' event.

▪ **listener**: *function*

A callback that will receive the Assistant text message as param.

▸ (`text`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "html", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the Assistant sends HTML data.

**Parameters:**

▪ **event**: *"html"*

The 'html' event.

▪ **listener**: *function*

A callback that will receive the HTML data as param.

▸ (`html`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`html` | string |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "volume", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the Assistant sends the new device volume level.

**Parameters:**

▪ **event**: *"volume"*

The 'volume' event.

▪ **listener**: *function*

A callback that will receive the new device volume level as param.

▸ (`newVolume`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newVolume` | number |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "speechrecognition", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered with the Assistant speech recognition results.

**Parameters:**

▪ **event**: *"speechrecognition"*

The 'speechrecognition' event.

▪ **listener**: *function*

A callback that will receive the Assistant speech recognition results as param.

▸ (`speechRecognitionResults`: [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`speechRecognitionResults` | [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[] |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "utteranceend", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the Assistant detects the end of the user's
speech utterance and expects no additional speech. Therefore, it will not process additional audio
(although it may subsequently return additional results).

**Parameters:**

▪ **event**: *"utteranceend"*

The 'utteranceend' event.

▪ **listener**: *function*

A callback that will receive the latest Assistant response as param.

▸ (`latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "end", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the Assistant closes the connection,
thus not sending any more data.

**Parameters:**

▪ **event**: *"end"*

The 'end' event.

▪ **listener**: *function*

A callback with no params.

▸ (): *void*

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "close", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when the connection with the Assistant is
fully closed.

**Parameters:**

▪ **event**: *"close"*

The 'end' event.

▪ **listener**: *function*

A callback with no params.

▸ (): *void*

**Returns:** *this*

The conversation.

▸ **addListener**(`event`: "error", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

Adds an event listener that will be triggered when any type of error occurs.

**Parameters:**

▪ **event**: *"error"*

The 'error' event.

▪ **listener**: *function*

A callback that will receive the error as param.

▸ (`error`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *this*

The conversation.

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

▸ **emit**(`event`: "data", `data`: [AssistantResponse](../interfaces/assistantresponse.md)): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "data" |
`data` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "action", `action`: unknown): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "action" |
`action` | unknown |

**Returns:** *boolean*

▸ **emit**(`event`: "actionongoogle", `actionOnGoogle`: unknown): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "actionongoogle" |
`actionOnGoogle` | unknown |

**Returns:** *boolean*

▸ **emit**(`event`: "audio", `audio`: Buffer): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "audio" |
`audio` | Buffer |

**Returns:** *boolean*

▸ **emit**(`event`: "conversationend", `latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "conversationend" |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "message", `text`: string): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "message" |
`text` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "html", `html`: string): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "html" |
`html` | string |

**Returns:** *boolean*

▸ **emit**(`event`: "volume", `newVolume`: number): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "volume" |
`newVolume` | number |

**Returns:** *boolean*

▸ **emit**(`event`: "speechrecognition", `speechRecognitionResults`: [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[]): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "speechrecognition" |
`speechRecognitionResults` | [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[] |

**Returns:** *boolean*

▸ **emit**(`event`: "utteranceend", `latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "utteranceend" |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *boolean*

▸ **emit**(`event`: "end"): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "end" |

**Returns:** *boolean*

▸ **emit**(`event`: "close"): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "close" |

**Returns:** *boolean*

▸ **emit**(`event`: "error", `error`: Error): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | "error" |
`error` | Error |

**Returns:** *boolean*

___

###  end

▸ **end**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Conversation](conversation.md).[eventNames](conversation.md#eventnames)*

**Returns:** *Array‹string | symbol›*

▸ **eventNames**(): *[ConversationEvent](../globals.md#conversationevent)[]*

*Inherited from [Conversation](conversation.md).[eventNames](conversation.md#eventnames)*

**Returns:** *[ConversationEvent](../globals.md#conversationevent)[]*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Conversation](conversation.md).[getMaxListeners](conversation.md#getmaxlisteners)*

**Returns:** *number*

▸ **getMaxListeners**(): *number*

*Inherited from [Conversation](conversation.md).[getMaxListeners](conversation.md#getmaxlisteners)*

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Conversation](conversation.md).[listenerCount](conversation.md#listenercount)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

▸ **listenerCount**(`type`: [ConversationEvent](../globals.md#conversationevent)): *number*

*Inherited from [Conversation](conversation.md).[listenerCount](conversation.md#listenercount)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [ConversationEvent](../globals.md#conversationevent) |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Conversation](conversation.md).[listeners](conversation.md#listeners)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

▸ **listeners**(`event`: [ConversationEvent](../globals.md#conversationevent)): *Array‹function›*

*Inherited from [Conversation](conversation.md).[listeners](conversation.md#listeners)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [ConversationEvent](../globals.md#conversationevent) |

**Returns:** *Array‹function›*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[off](conversation.md#off)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **on**(`event`: "data", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the Assistant sends any type of data.

**Parameters:**

▪ **event**: *"data"*

The 'data' event.

▪ **listener**: *function*

A callback that will receive the Assistant data as param.

▸ (`data`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "action", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered if the user has triggered a Device Action.
For example, a device which supports the query *Turn on the light* would receive an
object containing the semantics of the request.

**Parameters:**

▪ **event**: *"action"*

The 'action' event.

▪ **listener**: *function*

A callback that will receive the object containing the semantics of the request as param.

▸ (`action`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | unknown |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "actionongoogle", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered with the original response from an
Action-on-Google agent to Google server. To be able to receive this data, the conversation
has to be in debug mode, the request maker has to own the AoG project and the AoG project
has to be in preview mode.

**Parameters:**

▪ **event**: *"actionongoogle"*

The 'actionongoogle' event.

▪ **listener**: *function*

A callback that will receive the original response from the AoG agent as param.

▸ (`actionOnGoogle`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`actionOnGoogle` | unknown |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "audio", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the Assistant sends an audio message.

**Parameters:**

▪ **event**: *"audio"*

The 'audio' event.

▪ **listener**: *function*

A callback that will receive the Assistant audio message as param.

▸ (`audio`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`audio` | Buffer |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "conversationend", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the conversation with the Assistant ends.

**Parameters:**

▪ **event**: *"conversationend"*

The 'conversationend' event.

▪ **listener**: *function*

A callback that will receive the latest Assistant response as param.

▸ (`latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "message", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the Assistant sends a text message.

**Parameters:**

▪ **event**: *"message"*

The 'message' event.

▪ **listener**: *function*

A callback that will receive the Assistant text message as param.

▸ (`text`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "html", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the Assistant sends HTML data.

**Parameters:**

▪ **event**: *"html"*

The 'html' event.

▪ **listener**: *function*

A callback that will receive the HTML data as param.

▸ (`html`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`html` | string |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "volume", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the Assistant sends the new device volume level.

**Parameters:**

▪ **event**: *"volume"*

The 'volume' event.

▪ **listener**: *function*

A callback that will receive the new device volume level as param.

▸ (`newVolume`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newVolume` | number |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "speechrecognition", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered with the Assistant speech recognition results.

**Parameters:**

▪ **event**: *"speechrecognition"*

The 'speechrecognition' event.

▪ **listener**: *function*

A callback that will receive the Assistant speech recognition results as param.

▸ (`speechRecognitionResults`: [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`speechRecognitionResults` | [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[] |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "utteranceend", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the Assistant detects the end of the user's
speech utterance and expects no additional speech. Therefore, it will not process additional audio
(although it may subsequently return additional results).

**Parameters:**

▪ **event**: *"utteranceend"*

The 'utteranceend' event.

▪ **listener**: *function*

A callback that will receive the latest Assistant response as param.

▸ (`latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **on**(`event`: "end", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the Assistant closes the connection,
thus not sending any more data.

**Parameters:**

▪ **event**: *"end"*

The 'end' event.

▪ **listener**: *function*

A callback with no params.

▸ (): *void*

**Returns:** *this*

The conversation.

▸ **on**(`event`: "close", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when the connection with the Assistant is
fully closed.

**Parameters:**

▪ **event**: *"close"*

The 'end' event.

▪ **listener**: *function*

A callback with no params.

▸ (): *void*

**Returns:** *this*

The conversation.

▸ **on**(`event`: "error", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[on](conversation.md#on)*

Adds an event listener that will be triggered when any type of error occurs.

**Parameters:**

▪ **event**: *"error"*

The 'error' event.

▪ **listener**: *function*

A callback that will receive the error as param.

▸ (`error`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *this*

The conversation.

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **once**(`event`: "data", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the Assistant sends any type of data.

**Parameters:**

▪ **event**: *"data"*

The 'data' event.

▪ **listener**: *function*

A callback that will receive the Assistant data as param.

▸ (`data`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "action", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered if the user has triggered a Device Action.
For example, a device which supports the query *Turn on the light* would receive an
object containing the semantics of the request.

**Parameters:**

▪ **event**: *"action"*

The 'action' event.

▪ **listener**: *function*

A callback that will receive the object containing the semantics of the request as param.

▸ (`action`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`action` | unknown |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "actionongoogle", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered with the original response from an
Action-on-Google agent to Google server. To be able to receive this data, the conversation
has to be in debug mode, the request maker has to own the AoG project and the AoG project
has to be in preview mode.

**Parameters:**

▪ **event**: *"actionongoogle"*

The 'actionongoogle' event.

▪ **listener**: *function*

A callback that will receive the original response from the AoG agent as param.

▸ (`actionOnGoogle`: unknown): *void*

**Parameters:**

Name | Type |
------ | ------ |
`actionOnGoogle` | unknown |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "audio", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the Assistant sends an audio message.

**Parameters:**

▪ **event**: *"audio"*

The 'audio' event.

▪ **listener**: *function*

A callback that will receive the Assistant audio message as param.

▸ (`audio`: Buffer): *void*

**Parameters:**

Name | Type |
------ | ------ |
`audio` | Buffer |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "conversationend", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the conversation with the Assistant ends.

**Parameters:**

▪ **event**: *"conversationend"*

The 'conversationend' event.

▪ **listener**: *function*

A callback that will receive the latest Assistant response as param.

▸ (`latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "message", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the Assistant sends a text message.

**Parameters:**

▪ **event**: *"message"*

The 'message' event.

▪ **listener**: *function*

A callback that will receive the Assistant text message as param.

▸ (`text`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "html", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the Assistant sends HTML data.

**Parameters:**

▪ **event**: *"html"*

The 'html' event.

▪ **listener**: *function*

A callback that will receive the HTML data as param.

▸ (`html`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`html` | string |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "volume", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the Assistant sends the new device volume level.

**Parameters:**

▪ **event**: *"volume"*

The 'volume' event.

▪ **listener**: *function*

A callback that will receive the new device volume level as param.

▸ (`newVolume`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newVolume` | number |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "speechrecognition", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered with the Assistant speech recognition results.

**Parameters:**

▪ **event**: *"speechrecognition"*

The 'speechrecognition' event.

▪ **listener**: *function*

A callback that will receive the Assistant speech recognition results as param.

▸ (`speechRecognitionResults`: [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`speechRecognitionResults` | [AssistantSpeechRecognitionResult](../interfaces/assistantspeechrecognitionresult.md)[] |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "utteranceend", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the Assistant detects the end of the user's
speech utterance and expects no additional speech. Therefore, it will not process additional audio
(although it may subsequently return additional results).

**Parameters:**

▪ **event**: *"utteranceend"*

The 'utteranceend' event.

▪ **listener**: *function*

A callback that will receive the latest Assistant response as param.

▸ (`latestData`: [AssistantResponse](../interfaces/assistantresponse.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`latestData` | [AssistantResponse](../interfaces/assistantresponse.md) |

**Returns:** *this*

The conversation.

▸ **once**(`event`: "end", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the Assistant closes the connection,
thus not sending any more data.

**Parameters:**

▪ **event**: *"end"*

The 'end' event.

▪ **listener**: *function*

A callback with no params.

▸ (): *void*

**Returns:** *this*

The conversation.

▸ **once**(`event`: "close", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when the connection with the Assistant is
fully closed.

**Parameters:**

▪ **event**: *"close"*

The 'end' event.

▪ **listener**: *function*

A callback with no params.

▸ (): *void*

**Returns:** *this*

The conversation.

▸ **once**(`event`: "error", `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

Adds a one time event listener that will be triggered when any type of error occurs.

**Parameters:**

▪ **event**: *"error"*

The 'error' event.

▪ **listener**: *function*

A callback that will receive the error as param.

▸ (`error`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *this*

The conversation.

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[prependListener](conversation.md#prependlistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependListener**(`event`: [ConversationEvent](../globals.md#conversationevent), `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[prependListener](conversation.md#prependlistener)*

**Parameters:**

▪ **event**: *[ConversationEvent](../globals.md#conversationevent)*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[prependOnceListener](conversation.md#prependoncelistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **prependOnceListener**(`event`: [ConversationEvent](../globals.md#conversationevent), `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[prependOnceListener](conversation.md#prependoncelistener)*

**Parameters:**

▪ **event**: *[ConversationEvent](../globals.md#conversationevent)*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Conversation](conversation.md).[rawListeners](conversation.md#rawlisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

▸ **rawListeners**(`event`: [ConversationEvent](../globals.md#conversationevent)): *Array‹function›*

*Inherited from [Conversation](conversation.md).[rawListeners](conversation.md#rawlisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | [ConversationEvent](../globals.md#conversationevent) |

**Returns:** *Array‹function›*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Conversation](conversation.md).[removeAllListeners](conversation.md#removealllisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

▸ **removeAllListeners**(`event?`: [ConversationEvent](../globals.md#conversationevent)): *this*

*Inherited from [Conversation](conversation.md).[removeAllListeners](conversation.md#removealllisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | [ConversationEvent](../globals.md#conversationevent) |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[removeListener](conversation.md#removelistener)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

▸ **removeListener**(`event`: [ConversationEvent](../globals.md#conversationevent), `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[removeListener](conversation.md#removelistener)*

**Parameters:**

▪ **event**: *[ConversationEvent](../globals.md#conversationevent)*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  sendRawRequest

▸ **sendRawRequest**(`rawRequest`: [AssistRequest](../globals.md#assistrequest)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`rawRequest` | [AssistRequest](../globals.md#assistrequest) |

**Returns:** *boolean*

___

###  sendRequest

▸ **sendRequest**(`request`: [AssistantRequest](../globals.md#assistantrequest)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AssistantRequest](../globals.md#assistantrequest) |

**Returns:** *boolean*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Conversation](conversation.md).[setMaxListeners](conversation.md#setmaxlisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Conversation](conversation.md).[setMaxListeners](conversation.md#setmaxlisteners)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [Conversation](conversation.md).[listenerCount](conversation.md#static-listenercount)*

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*
