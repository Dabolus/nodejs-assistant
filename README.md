
![Google Assistant logo](https://upload.wikimedia.org/wikipedia/commons/c/cb/Google_Assistant_logo.svg "Google Assistant")

[Google Assistant SDK: Node.js Client](https://github.com/Dabolus/nodejs-assistant)
===================================================================================

> Node.js idiomatic client for [Google Assistant SDK](https://developers.google.com/assistant/sdk/) (unofficial).

The [Google Assistant SDK](https://developers.google.com/assistant/sdk/) lets you add hotword detection, voice control, natural language understanding and Google’s smarts to your devices. Your device captures an utterance (a spoken audio request, such as _What's on my calendar?_), sends it to the Google Assistant, and receives a spoken audio response in addition to the raw text of the utterance.

*   [Google Assistant SDK Node.js Client API Reference](https://dabolus.github.io/nodejs-assistant/)
*   [github.com/Dabolus/nodejs-assistant](https://github.com/Dabolus/nodejs-assistant)
*   [Google Assistant SDK documentation](https://developers.google.com/assistant/sdk/)

Read more about the client libraries for Cloud APIs, including the older Google APIs Client Libraries, in [Client Libraries Explained](https://cloud.google.com/apis/docs/client-libraries-explained).

**Table of contents:**

*   [Quickstart](#quickstart)
    *   [Before you begin](#before-you-begin)
    *   [Installing the client library](#installing-the-client-library)
    *   [Using the client library](#using-the-client-library)
*   [Samples](#samples)
*   [Contributing](#contributing)
*   [License](#license)

Quickstart
----------

### Before you begin

Some configuration steps are needed to make this library work correctly, for example creating a Cloud Platform project, creating a device and generating OAuth2 credentials. Please, follow [the Google Assistant Library for Python guide](https://developers.google.com/assistant/sdk/guides/library/python/) to get started quickly.

### Installing the client library

```
npm install --save nodejs-assistant
```

### Using the client library

```javascript
// Imports the Google Cloud client library
const {Assistant, AssistantLanguage} = require('nodejs-assistant');

// Your credentials
const credentials = require('path-to-your-credentials.json');

// Creates a client
const assistant = new Assistant(/* required credentials */ {
  type: 'authorized_user',
  client_id: credentials.client_id,
  client_secret: credentials.client_secret,
  refresh_token: credentials.refresh_token,
}, /* additional, optional options */ {
  locale: AssistantLanguage.ITALIAN, // Defaults to AssistantLanguage.ENGLISH (en-US)
  deviceId: 'your device id',
  deviceModelId: 'your device model id',
});

// Sends a text query to the assistant
assistant.query('Hi!')
  .then(response => {
    // response contains all the fields returned by the assistant, such as the text and audio
    console.log(`Response: ${response.text}`);
    // response.audio is a Buffer containing the audio response by the assistant
  })
  .catch(err => {
    console.error('ERROR: ', err);
  });
```

Samples
-------

Samples are in the [`samples/`](https://github.com/Dabolus/nodejs-assistant/tree/master/samples) directory. The samples' `README.md` has instructions for running the samples.

Sample

Source Code

Try it

Quickstart

[source code](https://github.com/Dabolus/nodejs-assistant/blob/master/samples/quickstart.js)

[![Open in Cloud Shell](https://gstatic.com/cloudssh/images/open-btn.png)](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

Text Conversation

[source code](https://github.com/Dabolus/nodejs-assistant/blob/master/samples/text.js)

[![Open in Cloud Shell](https://gstatic.com/cloudssh/images/open-btn.png)](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/text.js,samples/README.md)

Audio Conversation

[source code](https://github.com/Dabolus/nodejs-assistant/blob/master/samples/audio.js)

[![Open in Cloud Shell](https://gstatic.com/cloudssh/images/open-btn.png)](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/audio.js,samples/README.md)

You might also want to check out [Google Assistant Desktop _(Unofficial)_](https://github.com/Dabolus/google-assistant-desktop-unofficial) for a more concrete example.

Contributing
------------

Contributions welcome! See the [Contributing Guide](https://github.com/Dabolus/nodejs-assistant/blob/master/.github/CONTRIBUTING.md).

License
-------

Apache Version 2.0

See [LICENSE](https://github.com/Dabolus/nodejs-assistant/blob/master/LICENSE)

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

**Ƭ AssistConfig**: * `object` &  `object` &#124; `object`

*

___
<a id="assistrequest"></a>

###  AssistRequest

**Ƭ AssistRequest**: * `object` &#124; `object`
*

___
<a id="assistantrequest"></a>

###  AssistantRequest

**Ƭ AssistantRequest**: * `object` &#124;   `object` & `object`
 &#124;  `object` & `object`

*

___
<a id="conversationevent"></a>

###  ConversationEvent

**Ƭ ConversationEvent**: * "data" &#124; "action" &#124; "actionongoogle" &#124; "audio" &#124; "conversationend" &#124; "message" &#124; "html" &#124; "volume" &#124; "speechrecognition" &#124; "utteranceend"
*

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

