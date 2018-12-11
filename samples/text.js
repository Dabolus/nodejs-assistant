const { Assistant, AssistantLanguage } = require('nodejs-assistant');

const startTextAssistant = async () => {
  const assistant = new Assistant(/* TODO: get credentials */ {}, {
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
