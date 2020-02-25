[Assistant SDK for Node.js](../README.md) › [Globals](../globals.md) › [EmbeddedAssistant](embeddedassistant.md)

# Class: EmbeddedAssistant

## Hierarchy

* **EmbeddedAssistant**

## Index

### Constructors

* [constructor](embeddedassistant.md#constructor)

### Methods

* [assist](embeddedassistant.md#assist)

## Constructors

###  constructor

\+ **new EmbeddedAssistant**(`endpoint`: string, `credentials`: ChannelCredentials): *[EmbeddedAssistant](embeddedassistant.md)*

**Parameters:**

Name | Type |
------ | ------ |
`endpoint` | string |
`credentials` | ChannelCredentials |

**Returns:** *[EmbeddedAssistant](embeddedassistant.md)*

## Methods

###  assist

▸ **assist**(): *ClientDuplexStream‹[AssistRequest](../globals.md#assistrequest), [AssistResponse](../interfaces/assistresponse.md)›*

**Returns:** *ClientDuplexStream‹[AssistRequest](../globals.md#assistrequest), [AssistResponse](../interfaces/assistresponse.md)›*
