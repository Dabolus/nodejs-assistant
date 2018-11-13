import { relative } from 'path';
import * as grpc from 'grpc';
import * as protoFiles from 'google-proto-files';

const PROTO_ROOT_DIR = protoFiles('..');

const embeddedAssistantPb = grpc.load<any>({
  root: PROTO_ROOT_DIR,
  file: relative(PROTO_ROOT_DIR, protoFiles.embeddedAssistant.v1alpha2)
}).google.assistant.embedded.v1alpha2;

export { embeddedAssistantPb };
