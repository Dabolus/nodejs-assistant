<img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Google_Assistant_logo.svg" alt="Google Assistant logo" title="Google Assistant" align="right" height="96" width="96"/>

# Google Assistant SDK: Node.js Samples

[![Open in Cloud Shell][shell_img]][shell_link]

The [Google Assistant SDK](https://developers.google.com/assistant/sdk/) lets you add hotword detection, voice 
control, natural language understanding and Google’s smarts to your devices. 
Your device captures an utterance (a spoken audio request, such as 
_What's on my calendar?_), sends it to the Google Assistant, and receives a 
spoken audio response in addition to the raw text of the utterance.

## Table of Contents

* [Before you begin](#before-you-begin)
* [Samples](#samples)
  * [Quickstart](#quickstart)
  * [Text Conversation](#text-conversation)
  * [Audio Conversation](#audio-conversation)

## Before you begin

Before running the samples, make sure you've followed the steps in the
[Before you begin section](../README.md#before-you-begin) of the client
library's README.

## Samples

### Quickstart

A really basic example that sends a text query to the Assistant using the 
`query` method and prints its response.

View the [source code][quickstart_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/quickstart.js,samples/README.md)

__Usage:__ `node quickstart.js`

[quickstart_code]: https://github.com/Dabolus/nodejs-assistant/blob/master/samples/quickstart.js

### Text Conversation

An example that shows how to open a text conversation with the Assistant, send 
text queries and receive text responses.

View the [source code][text_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/text.js,samples/README.md)

__Usage:__ `node text.js`

[text_code]: https://github.com/Dabolus/nodejs-assistant/blob/master/samples/text.js

### Audio Conversation

An example that shows how to detect an hotword using [Snowboy](https://snowboy.kitt.ai/), 
open an audio conversation with the Assistant, send audio queries and receive 
audio responses. Note that the two hotwords ("Ok Google" and "Hey Google") were 
trained against my voice, so you might want to train your own hotwords from 
Snowboy's dashboard. The great thing is that Snowboy lets you train any keyword 
you want, not just "Ok Google" and "Hey Google".

View the [source code][audio_code].

[![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/audio.js,samples/README.md)

__Usage:__ `node audio.js`

[audio_code]: https://github.com/Dabolus/nodejs-assistant/blob/master/samples/audio.js

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[shell_link]: https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/Dabolus/nodejs-assistant&page=editor&open_in_editor=samples/README.md
