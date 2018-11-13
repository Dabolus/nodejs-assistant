import { ClientDuplexStream } from 'grpc';
import { embeddedAssistantPb } from './proto';

export class Conversation {
  private _onMessageCallbacks: Function[] = [];

  constructor(
    private _stream: ClientDuplexStream<any, any>,
    private _deviceModelId: string,
    private _deviceInstanceId: string,
    public locale: string,
  ) {
    _stream.on('data', (data: any) => {
      this._onMessageCallbacks.forEach(callback => callback(data));
    });
}

  public onMessage(callback: Function) {
    this._onMessageCallbacks.push(callback);
  }

  public send(text: string) {
    const config = new embeddedAssistantPb.AssistConfig();
    config.setTextQuery(text);
    config.setAudioOutConfig(new embeddedAssistantPb.AudioOutConfig());
    config.getAudioOutConfig().setEncoding(1);
    config.getAudioOutConfig().setSampleRateHertz(16000);
    config.getAudioOutConfig().setVolumePercentage(100);
    config.setDialogStateIn(new embeddedAssistantPb.DialogStateIn());
    config.setDeviceConfig(new embeddedAssistantPb.DeviceConfig());
    config.getDialogStateIn().setLanguageCode(this.locale);
    config.getDeviceConfig().setDeviceModelId(this._deviceModelId);
    config.getDeviceConfig().setDeviceId(this._deviceInstanceId);
    const request = new embeddedAssistantPb.AssistRequest();
    request.setConfig(config);
    delete request.audio_in;
    this._stream.write(request);
  }
}
