import * as grpc from 'grpc';
import { JWTInput, UserRefreshClient } from 'google-auth-library';
import { google } from './proto/assistant_proto_api';
import { RPCImpl } from 'protobufjs/minimal';

export interface GoogleAssistantOptions {
  locale?: string;
  deviceModelId: string;
  deviceInstanceId: string;
}

export class GoogleAssistant {
  private _endpoint = 'embeddedassistant.googleapis.com';
  private _client: google.assistant.embedded.v1alpha2.EmbeddedAssistant;
  private _grpcClient: RPCImpl;
  public locale = 'en-US';
  public deviceModelId = 'default';
  public deviceInstanceId = 'default';

  constructor(credentials: JWTInput, options: GoogleAssistantOptions = {
    locale: 'en-US',
    deviceModelId: 'default',
    deviceInstanceId: 'default',
  }) {
    this.locale = options.locale;
    this.deviceModelId = options.deviceModelId;
    this.deviceInstanceId = options.deviceInstanceId;
    this._grpcClient = this._createGrpcClient(credentials);
    this._client = new google.assistant.embedded.v1alpha2.EmbeddedAssistant(this._grpcClient);
  }

  private _createGrpcClient(credentials: JWTInput): RPCImpl {
    const sslCreds = grpc.credentials.createSsl();
    const refresh = new UserRefreshClient();
    refresh.fromJSON(credentials);
    const callCreds = grpc.credentials.createFromGoogleCredential(refresh);
    const combinedCreds = grpc.credentials.combineChannelCredentials(sslCreds, callCreds);
    return new grpc.Client(this._endpoint, combinedCreds) as any;
  }

  assist(input: string) {
    const config = new google.assistant.embedded.v1alpha2.AssistConfig({
      textQuery: input,
      audioOutConfig: new google.assistant.embedded.v1alpha2.AudioOutConfig({
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        volumePercentage: 100,
      }),
      dialogStateIn: new google.assistant.embedded.v1alpha2.DialogStateIn({
        languageCode: this.locale,
      }),
      deviceConfig: new google.assistant.embedded.v1alpha2.DeviceConfig({
        deviceId: this.deviceInstanceId,
        deviceModelId: this.deviceModelId,
      }),
    });
    const request = new google.assistant.embedded.v1alpha2.AssistRequest({ config });
    delete request.audioIn;
    return this._client.assist(request);
  }
}
