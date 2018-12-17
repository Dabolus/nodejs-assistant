const record = require('node-record-lpcm16');
const Speaker = require('speaker');
const { Assistant, AssistantLanguage, AudioInEncoding, AudioOutEncoding } = require('nodejs-assistant');
const { Detector, Models } = require('snowboy');
const { getCredentials } = require('./credentials');

const startAudioAssistant = async (mic) => {
  console.log('Speak now!');
  const credentials = await getCredentials();
  const assistant = new Assistant(credentials, {
    deviceId: 'test device',
    deviceModelId: 'test device model',
    locale: AssistantLanguage.ENGLISH,
  });
  let spokenResponseLength = 0;
  let speakerOpenTime = 0;
  let speakerTimer;

  // Setup the speaker
  const speaker = new Speaker({
    sampleRate: 16000,
    channels: 1,
  });
  // Setup the conversation with the Assistant
  const conversation = assistant.startAudioConversation(
    // Audio input config
    {
      encoding: AudioInEncoding.LINEAR16,
      sampleRateHertz: 16000,
    },
    // Audio output config
    {
      encoding: AudioOutEncoding.LINEAR16,
      sampleRateHertz: 16000,
      volumePercentage: 100,
    },
  );

  conversation.on('audio', (audio) => {
    const now = Date.now();
    speaker.write(audio);
    spokenResponseLength += audio.length;
    const audioTime = spokenResponseLength / (16000 * 16 / 8) * 1000;
    if (speakerTimer) {
      clearTimeout(speakerTimer);
    }
    speakerTimer = setTimeout(
      () => speaker.end(),
      audioTime - Math.max(0, now - speakerOpenTime),
    );
  });

  mic.on('data', (data) => conversation.send(data));

  speaker
    .on('open', () => {
      if (speakerTimer) {
        clearTimeout(speakerTimer);
      }
      spokenResponseLength = 0;
      speakerOpenTime = Date.now();
    })
    .on('close', () => void 0);
};

const waitForHotword = () => {
  const models = new Models();
  models.add({
    file: 'resources/ok_google.pmdl',
    sensitivity: '0.5',
    hotwords: 'Ok Google',
  });
  models.add({
    file: 'resources/hey_google.pmdl',
    sensitivity: '0.5',
    hotwords: 'Hey Google',
  });

  const detector = new Detector({
    models,
    resource: 'resources/common.res',
    audioGain: 1,
    applyFrontend: false,
  });

  // Setup the mic
  const mic = record.start({
    sampleRate: 16000,
    threshold: 0,
  });

  detector.on('hotword', () => startAudioAssistant(mic));
  mic.pipe(detector);
};

waitForHotword();
