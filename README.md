<img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Google_Assistant_logo.svg" alt="Google Assistant logo" title="Google Assistant" align="right" height="96" width="96"/>

# [Google Assistant SDK: Node.js Client](https://github.com/Dabolus/nodejs-assistant)

<!-- TODO: Add some badges here -->

> Node.js idiomatic client for [Google Assistant SDK][product-docs] (unofficial).

The [Google Assistant SDK][product-docs] lets you add hotword detection, voice 
control, natural language understanding and Google’s smarts to your devices. 
Your device captures an utterance (a spoken audio request, such as 
_What's on my calendar?_), sends it to the Google Assistant, and receives a 
spoken audio response in addition to the raw text of the utterance.


* [Google Assistant SDK Node.js Client API Reference][client-docs]
* [github.com/Dabolus/nodejs-assistant](https://github.com/Dabolus/nodejs-assistant)
* [Google Assistant SDK documentation][product-docs]

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**

* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

Some configuration steps are needed to make this library work correctly, for 
example creating a Cloud Platform project, creating a device and generating 
OAuth2 credentials. Please, follow 
[the Google Assistant Library for Python guide](https://developers.google.com/assistant/sdk/guides/library/python/) 
to get started quickly.

### Installing the client library

    npm install --save nodejs-assistant

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

## Samples

Samples are in the [`samples/`](https://github.com/Dabolus/nodejs-assistant/tree/master/samples) directory. The samples' `README.md`
has instructions for running the samples.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/Dabolus/nodejs-assistant/blob/master/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |
| Text Conversation | [source code](https://github.com/Dabolus/nodejs-assistant/blob/master/samples/text.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/text.js,samples/README.md) |
| Audio Conversation | [source code](https://github.com/Dabolus/nodejs-assistant/blob/master/samples/audio.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/audio.js,samples/README.md) |

You might also want to check out [Google Assistant Desktop _(Unofficial)_](https://github.com/Dabolus/google-assistant-desktop-unofficial) 
for a more concrete example.

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/Dabolus/nodejs-assistant/blob/master/.github/CONTRIBUTING.md).

## License

Apache Version 2.0

See [LICENSE](https://github.com/Dabolus/nodejs-assistant/blob/master/LICENSE)

[client-docs]: https://dabolus.github.io/nodejs-assistant/
[product-docs]: https://developers.google.com/assistant/sdk/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
