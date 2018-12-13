const { Assistant, AssistantLanguage } = require('nodejs-assistant');
const { getCredentials } = require('./credentials');

const startTextAssistant = async () => {
  const credentials = await getCredentials();
  const assistant = new Assistant(credentials, {
    deviceId: 'test device',
    deviceModelId: 'test device model',
    locale: AssistantLanguage.ENGLISH,
  });

  const conversation = assistant.startTextConversation();

  conversation
    .on('message', (text) => console.log('Assistant: ', text))
    .send('Hi!');
};

startTextAssistant();
