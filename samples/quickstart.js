const { Assistant, AssistantLanguage } = require('nodejs-assistant');

const startAssistant = async () => {
  const assistant = new Assistant(/* TODO: get credentials */ {}, {
    deviceId: 'test device',
    deviceModelId: 'test device model',
    locale: AssistantLanguage.ENGLISH,
  });

  const response = await assistant.query('Hi!');
  console.log('Assistant response: ', response);
};

startAssistant();
