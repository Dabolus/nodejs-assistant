[Assistant SDK for Node.js](../README.md) › [Globals](../globals.md) › [AudioConversation](audioconversation.md)

# Class: AudioConversation

Represents an audio conversation with the Assistant.

**`author`** Giorgio Garasto <giorgio@garasto.it>

**`license`** MIT

## Hierarchy

  ↳ [Conversation](conversation.md)

  ↳ **AudioConversation**

## Index

### Constructors

* [constructor](audioconversation.md#constructor)

### Properties

* [_deviceId](audioconversation.md#protected-_deviceid)
* [_deviceModelId](audioconversation.md#protected-_devicemodelid)
* [locale](audioconversation.md#locale)

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

## Constructors

###  constructor

\+ **new AudioConversation**(`_stream`: ClientDuplexStream‹[AssistRequest](../globals.md#assistrequest), [AssistResponse](../interfaces/assistresponse.md)›, `_deviceId`: string, `_deviceModelId`: string, `locale`: [AssistantLanguage](../enums/assistantlanguage.md), `audioInConfig`: [AudioInConfig](../interfaces/audioinconfig.md), `audioOutConfig`: [AudioOutConfig](../interfaces/audiooutconfig.md)): *[AudioConversation](audioconversation.md)*

*Overrides [Conversation](conversation.md).[constructor](conversation.md#constructor)*

Creates a new audio conversation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`_stream` | ClientDuplexStream‹[AssistRequest](../globals.md#assistrequest), [AssistResponse](../interfaces/assistresponse.md)› | The duplex stream to use to communicate with the Assistant SDK. |
`_deviceId` | string | The device ID to use during this conversation. |
`_deviceModelId` | string | The device model ID to use during this conversation. |
`locale` | [AssistantLanguage](../enums/assistantlanguage.md) | The locale to use during this conversation. |
`audioInConfig` | [AudioInConfig](../interfaces/audioinconfig.md) | The audio input configuration. |
`audioOutConfig` | [AudioOutConfig](../interfaces/audiooutconfig.md) | The audio output configuration. |

**Returns:** *[AudioConversation](audioconversation.md)*

## Properties

### `Protected` _deviceId

• **_deviceId**: *string*

*Inherited from [Conversation](conversation.md).[_deviceId](conversation.md#protected-_deviceid)*

The device ID to use during this conversation.

___

### `Protected` _deviceModelId

• **_deviceModelId**: *string*

*Inherited from [Conversation](conversation.md).[_deviceModelId](conversation.md#protected-_devicemodelid)*

The device model ID to use during this conversation.

___

###  locale

• **locale**: *[AssistantLanguage](../enums/assistantlanguage.md)*

*Inherited from [Conversation](conversation.md).[locale](conversation.md#locale)*

The locale to use during this conversation.

## Methods

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[addListener](conversation.md#addlistener)*

*Overrides void*

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

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Inherited from [Conversation](conversation.md).[emit](conversation.md#emit)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  end

▸ **end**(): *Promise‹void›*

*Inherited from [Conversation](conversation.md).[end](conversation.md#end)*

**Returns:** *Promise‹void›*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [Conversation](conversation.md).[eventNames](conversation.md#eventnames)*

*Overrides void*

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [Conversation](conversation.md).[getMaxListeners](conversation.md#getmaxlisteners)*

*Overrides void*

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [Conversation](conversation.md).[listenerCount](conversation.md#listenercount)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [Conversation](conversation.md).[listeners](conversation.md#listeners)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

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

*Overrides void*

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

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[once](conversation.md#once)*

*Overrides void*

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

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[prependListener](conversation.md#prependlistener)*

*Overrides void*

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

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[prependOnceListener](conversation.md#prependoncelistener)*

*Overrides void*

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

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [Conversation](conversation.md).[rawListeners](conversation.md#rawlisteners)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [Conversation](conversation.md).[removeAllListeners](conversation.md#removealllisteners)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [Conversation](conversation.md).[removeListener](conversation.md#removelistener)*

*Overrides void*

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

###  send

▸ **send**(`audio`: Buffer): *boolean*

Sends audio to the Assistant.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`audio` | Buffer | The audio buffer to send to the Assistant. |

**Returns:** *boolean*

A boolean that tells whether the audio buffer was successfully sent or not.

___

###  sendRawRequest

▸ **sendRawRequest**(`rawRequest`: [AssistRequest](../globals.md#assistrequest)): *boolean*

*Inherited from [Conversation](conversation.md).[sendRawRequest](conversation.md#sendrawrequest)*

**Parameters:**

Name | Type |
------ | ------ |
`rawRequest` | [AssistRequest](../globals.md#assistrequest) |

**Returns:** *boolean*

___

###  sendRequest

▸ **sendRequest**(`request`: [AssistantRequest](../globals.md#assistantrequest)): *boolean*

*Inherited from [Conversation](conversation.md).[sendRequest](conversation.md#sendrequest)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AssistantRequest](../globals.md#assistantrequest) |

**Returns:** *boolean*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [Conversation](conversation.md).[setMaxListeners](conversation.md#setmaxlisteners)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*
