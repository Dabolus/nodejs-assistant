const { Assistant, AssistantLanguage } = require('nodejs-assistant');
const { getCredentials } = require('./credentials');

const startAssistant = async () => {
  const credentials = await getCredentials();
  const assistant = new Assistant(credentials, {
    deviceId: 'test device',
    deviceModelId: 'test device model',
    locale: AssistantLanguage.ENGLISH,
  });

  const response = await assistant.query('Hi!');
  console.log('Assistant response: ', response);
};

startAssistant();
