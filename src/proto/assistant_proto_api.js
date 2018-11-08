var $protobuf = require("protobufjs/minimal");

// Common aliases
var $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.type = (function() {

        /**
         * Namespace type.
         * @memberof google
         * @namespace
         */
        var type = {};

        type.LatLng = (function() {

            /**
             * Properties of a LatLng.
             * @memberof google.type
             * @interface ILatLng
             * @property {number|null} [latitude] LatLng latitude
             * @property {number|null} [longitude] LatLng longitude
             */

            /**
             * Constructs a new LatLng.
             * @memberof google.type
             * @classdesc Represents a LatLng.
             * @implements ILatLng
             * @constructor
             * @param {google.type.ILatLng=} [properties] Properties to set
             */
            function LatLng(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LatLng latitude.
             * @member {number} latitude
             * @memberof google.type.LatLng
             * @instance
             */
            LatLng.prototype.latitude = 0;

            /**
             * LatLng longitude.
             * @member {number} longitude
             * @memberof google.type.LatLng
             * @instance
             */
            LatLng.prototype.longitude = 0;

            return LatLng;
        })();

        return type;
    })();

    google.assistant = (function() {

        /**
         * Namespace assistant.
         * @memberof google
         * @namespace
         */
        var assistant = {};

        assistant.embedded = (function() {

            /**
             * Namespace embedded.
             * @memberof google.assistant
             * @namespace
             */
            var embedded = {};

            embedded.v1alpha2 = (function() {

                /**
                 * Namespace v1alpha2.
                 * @memberof google.assistant.embedded
                 * @namespace
                 */
                var v1alpha2 = {};

                v1alpha2.EmbeddedAssistant = (function() {

                    /**
                     * Constructs a new EmbeddedAssistant service.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents an EmbeddedAssistant
                     * @extends $protobuf.rpc.Service
                     * @constructor
                     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                     */
                    function EmbeddedAssistant(rpcImpl, requestDelimited, responseDelimited) {
                        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                    }

                    (EmbeddedAssistant.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = EmbeddedAssistant;

                    /**
                     * Callback as used by {@link google.assistant.embedded.v1alpha2.EmbeddedAssistant#assist}.
                     * @memberof google.assistant.embedded.v1alpha2.EmbeddedAssistant
                     * @typedef AssistCallback
                     * @type {function}
                     * @param {Error|null} error Error, if any
                     * @param {google.assistant.embedded.v1alpha2.AssistResponse} [response] AssistResponse
                     */

                    /**
                     * Calls Assist.
                     * @function assist
                     * @memberof google.assistant.embedded.v1alpha2.EmbeddedAssistant
                     * @instance
                     * @param {google.assistant.embedded.v1alpha2.IAssistRequest} request AssistRequest message or plain object
                     * @param {google.assistant.embedded.v1alpha2.EmbeddedAssistant.AssistCallback} callback Node-style callback called with the error, if any, and AssistResponse
                     * @returns {undefined}
                     * @variation 1
                     */
                    Object.defineProperty(EmbeddedAssistant.prototype.assist = function assist(request, callback) {
                        return this.rpcCall(assist, $root.google.assistant.embedded.v1alpha2.AssistRequest, $root.google.assistant.embedded.v1alpha2.AssistResponse, request, callback);
                    }, "name", { value: "Assist" });

                    /**
                     * Calls Assist.
                     * @function assist
                     * @memberof google.assistant.embedded.v1alpha2.EmbeddedAssistant
                     * @instance
                     * @param {google.assistant.embedded.v1alpha2.IAssistRequest} request AssistRequest message or plain object
                     * @returns {Promise<google.assistant.embedded.v1alpha2.AssistResponse>} Promise
                     * @variation 2
                     */

                    return EmbeddedAssistant;
                })();

                v1alpha2.AssistRequest = (function() {

                    /**
                     * Properties of an AssistRequest.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IAssistRequest
                     * @property {google.assistant.embedded.v1alpha2.IAssistConfig|null} [config] AssistRequest config
                     * @property {Uint8Array|null} [audioIn] AssistRequest audioIn
                     */

                    /**
                     * Constructs a new AssistRequest.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents an AssistRequest.
                     * @implements IAssistRequest
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IAssistRequest=} [properties] Properties to set
                     */
                    function AssistRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AssistRequest config.
                     * @member {google.assistant.embedded.v1alpha2.IAssistConfig|null|undefined} config
                     * @memberof google.assistant.embedded.v1alpha2.AssistRequest
                     * @instance
                     */
                    AssistRequest.prototype.config = null;

                    /**
                     * AssistRequest audioIn.
                     * @member {Uint8Array} audioIn
                     * @memberof google.assistant.embedded.v1alpha2.AssistRequest
                     * @instance
                     */
                    AssistRequest.prototype.audioIn = $util.newBuffer([]);

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * AssistRequest type.
                     * @member {"config"|"audioIn"|undefined} type
                     * @memberof google.assistant.embedded.v1alpha2.AssistRequest
                     * @instance
                     */
                    Object.defineProperty(AssistRequest.prototype, "type", {
                        get: $util.oneOfGetter($oneOfFields = ["config", "audioIn"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    return AssistRequest;
                })();

                v1alpha2.AssistResponse = (function() {

                    /**
                     * Properties of an AssistResponse.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IAssistResponse
                     * @property {google.assistant.embedded.v1alpha2.AssistResponse.EventType|null} [eventType] AssistResponse eventType
                     * @property {google.assistant.embedded.v1alpha2.IAudioOut|null} [audioOut] AssistResponse audioOut
                     * @property {google.assistant.embedded.v1alpha2.IScreenOut|null} [screenOut] AssistResponse screenOut
                     * @property {google.assistant.embedded.v1alpha2.IDeviceAction|null} [deviceAction] AssistResponse deviceAction
                     * @property {Array.<google.assistant.embedded.v1alpha2.ISpeechRecognitionResult>|null} [speechResults] AssistResponse speechResults
                     * @property {google.assistant.embedded.v1alpha2.IDialogStateOut|null} [dialogStateOut] AssistResponse dialogStateOut
                     * @property {google.assistant.embedded.v1alpha2.IDebugInfo|null} [debugInfo] AssistResponse debugInfo
                     */

                    /**
                     * Constructs a new AssistResponse.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents an AssistResponse.
                     * @implements IAssistResponse
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IAssistResponse=} [properties] Properties to set
                     */
                    function AssistResponse(properties) {
                        this.speechResults = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AssistResponse eventType.
                     * @member {google.assistant.embedded.v1alpha2.AssistResponse.EventType} eventType
                     * @memberof google.assistant.embedded.v1alpha2.AssistResponse
                     * @instance
                     */
                    AssistResponse.prototype.eventType = 0;

                    /**
                     * AssistResponse audioOut.
                     * @member {google.assistant.embedded.v1alpha2.IAudioOut|null|undefined} audioOut
                     * @memberof google.assistant.embedded.v1alpha2.AssistResponse
                     * @instance
                     */
                    AssistResponse.prototype.audioOut = null;

                    /**
                     * AssistResponse screenOut.
                     * @member {google.assistant.embedded.v1alpha2.IScreenOut|null|undefined} screenOut
                     * @memberof google.assistant.embedded.v1alpha2.AssistResponse
                     * @instance
                     */
                    AssistResponse.prototype.screenOut = null;

                    /**
                     * AssistResponse deviceAction.
                     * @member {google.assistant.embedded.v1alpha2.IDeviceAction|null|undefined} deviceAction
                     * @memberof google.assistant.embedded.v1alpha2.AssistResponse
                     * @instance
                     */
                    AssistResponse.prototype.deviceAction = null;

                    /**
                     * AssistResponse speechResults.
                     * @member {Array.<google.assistant.embedded.v1alpha2.ISpeechRecognitionResult>} speechResults
                     * @memberof google.assistant.embedded.v1alpha2.AssistResponse
                     * @instance
                     */
                    AssistResponse.prototype.speechResults = $util.emptyArray;

                    /**
                     * AssistResponse dialogStateOut.
                     * @member {google.assistant.embedded.v1alpha2.IDialogStateOut|null|undefined} dialogStateOut
                     * @memberof google.assistant.embedded.v1alpha2.AssistResponse
                     * @instance
                     */
                    AssistResponse.prototype.dialogStateOut = null;

                    /**
                     * AssistResponse debugInfo.
                     * @member {google.assistant.embedded.v1alpha2.IDebugInfo|null|undefined} debugInfo
                     * @memberof google.assistant.embedded.v1alpha2.AssistResponse
                     * @instance
                     */
                    AssistResponse.prototype.debugInfo = null;

                    /**
                     * EventType enum.
                     * @name google.assistant.embedded.v1alpha2.AssistResponse.EventType
                     * @enum {number}
                     * @property {string} EVENT_TYPE_UNSPECIFIED=EVENT_TYPE_UNSPECIFIED EVENT_TYPE_UNSPECIFIED value
                     * @property {string} END_OF_UTTERANCE=END_OF_UTTERANCE END_OF_UTTERANCE value
                     */
                    AssistResponse.EventType = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "EVENT_TYPE_UNSPECIFIED"] = "EVENT_TYPE_UNSPECIFIED";
                        values[valuesById[1] = "END_OF_UTTERANCE"] = "END_OF_UTTERANCE";
                        return values;
                    })();

                    return AssistResponse;
                })();

                v1alpha2.DebugInfo = (function() {

                    /**
                     * Properties of a DebugInfo.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IDebugInfo
                     * @property {string|null} [aogAgentToAssistantJson] DebugInfo aogAgentToAssistantJson
                     */

                    /**
                     * Constructs a new DebugInfo.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a DebugInfo.
                     * @implements IDebugInfo
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IDebugInfo=} [properties] Properties to set
                     */
                    function DebugInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DebugInfo aogAgentToAssistantJson.
                     * @member {string} aogAgentToAssistantJson
                     * @memberof google.assistant.embedded.v1alpha2.DebugInfo
                     * @instance
                     */
                    DebugInfo.prototype.aogAgentToAssistantJson = "";

                    return DebugInfo;
                })();

                v1alpha2.AssistConfig = (function() {

                    /**
                     * Properties of an AssistConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IAssistConfig
                     * @property {google.assistant.embedded.v1alpha2.IAudioInConfig|null} [audioInConfig] AssistConfig audioInConfig
                     * @property {string|null} [textQuery] AssistConfig textQuery
                     * @property {google.assistant.embedded.v1alpha2.IAudioOutConfig|null} [audioOutConfig] AssistConfig audioOutConfig
                     * @property {google.assistant.embedded.v1alpha2.IScreenOutConfig|null} [screenOutConfig] AssistConfig screenOutConfig
                     * @property {google.assistant.embedded.v1alpha2.IDialogStateIn|null} [dialogStateIn] AssistConfig dialogStateIn
                     * @property {google.assistant.embedded.v1alpha2.IDeviceConfig|null} [deviceConfig] AssistConfig deviceConfig
                     * @property {google.assistant.embedded.v1alpha2.IDebugConfig|null} [debugConfig] AssistConfig debugConfig
                     */

                    /**
                     * Constructs a new AssistConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents an AssistConfig.
                     * @implements IAssistConfig
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IAssistConfig=} [properties] Properties to set
                     */
                    function AssistConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AssistConfig audioInConfig.
                     * @member {google.assistant.embedded.v1alpha2.IAudioInConfig|null|undefined} audioInConfig
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    AssistConfig.prototype.audioInConfig = null;

                    /**
                     * AssistConfig textQuery.
                     * @member {string} textQuery
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    AssistConfig.prototype.textQuery = "";

                    /**
                     * AssistConfig audioOutConfig.
                     * @member {google.assistant.embedded.v1alpha2.IAudioOutConfig|null|undefined} audioOutConfig
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    AssistConfig.prototype.audioOutConfig = null;

                    /**
                     * AssistConfig screenOutConfig.
                     * @member {google.assistant.embedded.v1alpha2.IScreenOutConfig|null|undefined} screenOutConfig
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    AssistConfig.prototype.screenOutConfig = null;

                    /**
                     * AssistConfig dialogStateIn.
                     * @member {google.assistant.embedded.v1alpha2.IDialogStateIn|null|undefined} dialogStateIn
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    AssistConfig.prototype.dialogStateIn = null;

                    /**
                     * AssistConfig deviceConfig.
                     * @member {google.assistant.embedded.v1alpha2.IDeviceConfig|null|undefined} deviceConfig
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    AssistConfig.prototype.deviceConfig = null;

                    /**
                     * AssistConfig debugConfig.
                     * @member {google.assistant.embedded.v1alpha2.IDebugConfig|null|undefined} debugConfig
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    AssistConfig.prototype.debugConfig = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * AssistConfig type.
                     * @member {"audioInConfig"|"textQuery"|undefined} type
                     * @memberof google.assistant.embedded.v1alpha2.AssistConfig
                     * @instance
                     */
                    Object.defineProperty(AssistConfig.prototype, "type", {
                        get: $util.oneOfGetter($oneOfFields = ["audioInConfig", "textQuery"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    return AssistConfig;
                })();

                v1alpha2.AudioInConfig = (function() {

                    /**
                     * Properties of an AudioInConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IAudioInConfig
                     * @property {google.assistant.embedded.v1alpha2.AudioInConfig.Encoding|null} [encoding] AudioInConfig encoding
                     * @property {number|null} [sampleRateHertz] AudioInConfig sampleRateHertz
                     */

                    /**
                     * Constructs a new AudioInConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents an AudioInConfig.
                     * @implements IAudioInConfig
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IAudioInConfig=} [properties] Properties to set
                     */
                    function AudioInConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AudioInConfig encoding.
                     * @member {google.assistant.embedded.v1alpha2.AudioInConfig.Encoding} encoding
                     * @memberof google.assistant.embedded.v1alpha2.AudioInConfig
                     * @instance
                     */
                    AudioInConfig.prototype.encoding = 0;

                    /**
                     * AudioInConfig sampleRateHertz.
                     * @member {number} sampleRateHertz
                     * @memberof google.assistant.embedded.v1alpha2.AudioInConfig
                     * @instance
                     */
                    AudioInConfig.prototype.sampleRateHertz = 0;

                    /**
                     * Encoding enum.
                     * @name google.assistant.embedded.v1alpha2.AudioInConfig.Encoding
                     * @enum {number}
                     * @property {string} ENCODING_UNSPECIFIED=ENCODING_UNSPECIFIED ENCODING_UNSPECIFIED value
                     * @property {string} LINEAR16=LINEAR16 LINEAR16 value
                     * @property {string} FLAC=FLAC FLAC value
                     */
                    AudioInConfig.Encoding = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ENCODING_UNSPECIFIED"] = "ENCODING_UNSPECIFIED";
                        values[valuesById[1] = "LINEAR16"] = "LINEAR16";
                        values[valuesById[2] = "FLAC"] = "FLAC";
                        return values;
                    })();

                    return AudioInConfig;
                })();

                v1alpha2.AudioOutConfig = (function() {

                    /**
                     * Properties of an AudioOutConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IAudioOutConfig
                     * @property {google.assistant.embedded.v1alpha2.AudioOutConfig.Encoding|null} [encoding] AudioOutConfig encoding
                     * @property {number|null} [sampleRateHertz] AudioOutConfig sampleRateHertz
                     * @property {number|null} [volumePercentage] AudioOutConfig volumePercentage
                     */

                    /**
                     * Constructs a new AudioOutConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents an AudioOutConfig.
                     * @implements IAudioOutConfig
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IAudioOutConfig=} [properties] Properties to set
                     */
                    function AudioOutConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AudioOutConfig encoding.
                     * @member {google.assistant.embedded.v1alpha2.AudioOutConfig.Encoding} encoding
                     * @memberof google.assistant.embedded.v1alpha2.AudioOutConfig
                     * @instance
                     */
                    AudioOutConfig.prototype.encoding = 0;

                    /**
                     * AudioOutConfig sampleRateHertz.
                     * @member {number} sampleRateHertz
                     * @memberof google.assistant.embedded.v1alpha2.AudioOutConfig
                     * @instance
                     */
                    AudioOutConfig.prototype.sampleRateHertz = 0;

                    /**
                     * AudioOutConfig volumePercentage.
                     * @member {number} volumePercentage
                     * @memberof google.assistant.embedded.v1alpha2.AudioOutConfig
                     * @instance
                     */
                    AudioOutConfig.prototype.volumePercentage = 0;

                    /**
                     * Encoding enum.
                     * @name google.assistant.embedded.v1alpha2.AudioOutConfig.Encoding
                     * @enum {number}
                     * @property {string} ENCODING_UNSPECIFIED=ENCODING_UNSPECIFIED ENCODING_UNSPECIFIED value
                     * @property {string} LINEAR16=LINEAR16 LINEAR16 value
                     * @property {string} MP3=MP3 MP3 value
                     * @property {string} OPUS_IN_OGG=OPUS_IN_OGG OPUS_IN_OGG value
                     */
                    AudioOutConfig.Encoding = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "ENCODING_UNSPECIFIED"] = "ENCODING_UNSPECIFIED";
                        values[valuesById[1] = "LINEAR16"] = "LINEAR16";
                        values[valuesById[2] = "MP3"] = "MP3";
                        values[valuesById[3] = "OPUS_IN_OGG"] = "OPUS_IN_OGG";
                        return values;
                    })();

                    return AudioOutConfig;
                })();

                v1alpha2.ScreenOutConfig = (function() {

                    /**
                     * Properties of a ScreenOutConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IScreenOutConfig
                     * @property {google.assistant.embedded.v1alpha2.ScreenOutConfig.ScreenMode|null} [screenMode] ScreenOutConfig screenMode
                     */

                    /**
                     * Constructs a new ScreenOutConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a ScreenOutConfig.
                     * @implements IScreenOutConfig
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IScreenOutConfig=} [properties] Properties to set
                     */
                    function ScreenOutConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScreenOutConfig screenMode.
                     * @member {google.assistant.embedded.v1alpha2.ScreenOutConfig.ScreenMode} screenMode
                     * @memberof google.assistant.embedded.v1alpha2.ScreenOutConfig
                     * @instance
                     */
                    ScreenOutConfig.prototype.screenMode = 0;

                    /**
                     * ScreenMode enum.
                     * @name google.assistant.embedded.v1alpha2.ScreenOutConfig.ScreenMode
                     * @enum {number}
                     * @property {string} SCREEN_MODE_UNSPECIFIED=SCREEN_MODE_UNSPECIFIED SCREEN_MODE_UNSPECIFIED value
                     * @property {string} OFF=OFF OFF value
                     * @property {string} PLAYING=PLAYING PLAYING value
                     */
                    ScreenOutConfig.ScreenMode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SCREEN_MODE_UNSPECIFIED"] = "SCREEN_MODE_UNSPECIFIED";
                        values[valuesById[1] = "OFF"] = "OFF";
                        values[valuesById[3] = "PLAYING"] = "PLAYING";
                        return values;
                    })();

                    return ScreenOutConfig;
                })();

                v1alpha2.DialogStateIn = (function() {

                    /**
                     * Properties of a DialogStateIn.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IDialogStateIn
                     * @property {Uint8Array|null} [conversationState] DialogStateIn conversationState
                     * @property {string|null} [languageCode] DialogStateIn languageCode
                     * @property {google.assistant.embedded.v1alpha2.IDeviceLocation|null} [deviceLocation] DialogStateIn deviceLocation
                     * @property {boolean|null} [isNewConversation] DialogStateIn isNewConversation
                     */

                    /**
                     * Constructs a new DialogStateIn.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a DialogStateIn.
                     * @implements IDialogStateIn
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IDialogStateIn=} [properties] Properties to set
                     */
                    function DialogStateIn(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DialogStateIn conversationState.
                     * @member {Uint8Array} conversationState
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateIn
                     * @instance
                     */
                    DialogStateIn.prototype.conversationState = $util.newBuffer([]);

                    /**
                     * DialogStateIn languageCode.
                     * @member {string} languageCode
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateIn
                     * @instance
                     */
                    DialogStateIn.prototype.languageCode = "";

                    /**
                     * DialogStateIn deviceLocation.
                     * @member {google.assistant.embedded.v1alpha2.IDeviceLocation|null|undefined} deviceLocation
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateIn
                     * @instance
                     */
                    DialogStateIn.prototype.deviceLocation = null;

                    /**
                     * DialogStateIn isNewConversation.
                     * @member {boolean} isNewConversation
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateIn
                     * @instance
                     */
                    DialogStateIn.prototype.isNewConversation = false;

                    return DialogStateIn;
                })();

                v1alpha2.DeviceConfig = (function() {

                    /**
                     * Properties of a DeviceConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IDeviceConfig
                     * @property {string|null} [deviceId] DeviceConfig deviceId
                     * @property {string|null} [deviceModelId] DeviceConfig deviceModelId
                     */

                    /**
                     * Constructs a new DeviceConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a DeviceConfig.
                     * @implements IDeviceConfig
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IDeviceConfig=} [properties] Properties to set
                     */
                    function DeviceConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeviceConfig deviceId.
                     * @member {string} deviceId
                     * @memberof google.assistant.embedded.v1alpha2.DeviceConfig
                     * @instance
                     */
                    DeviceConfig.prototype.deviceId = "";

                    /**
                     * DeviceConfig deviceModelId.
                     * @member {string} deviceModelId
                     * @memberof google.assistant.embedded.v1alpha2.DeviceConfig
                     * @instance
                     */
                    DeviceConfig.prototype.deviceModelId = "";

                    return DeviceConfig;
                })();

                v1alpha2.AudioOut = (function() {

                    /**
                     * Properties of an AudioOut.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IAudioOut
                     * @property {Uint8Array|null} [audioData] AudioOut audioData
                     */

                    /**
                     * Constructs a new AudioOut.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents an AudioOut.
                     * @implements IAudioOut
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IAudioOut=} [properties] Properties to set
                     */
                    function AudioOut(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * AudioOut audioData.
                     * @member {Uint8Array} audioData
                     * @memberof google.assistant.embedded.v1alpha2.AudioOut
                     * @instance
                     */
                    AudioOut.prototype.audioData = $util.newBuffer([]);

                    return AudioOut;
                })();

                v1alpha2.ScreenOut = (function() {

                    /**
                     * Properties of a ScreenOut.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IScreenOut
                     * @property {google.assistant.embedded.v1alpha2.ScreenOut.Format|null} [format] ScreenOut format
                     * @property {Uint8Array|null} [data] ScreenOut data
                     */

                    /**
                     * Constructs a new ScreenOut.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a ScreenOut.
                     * @implements IScreenOut
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IScreenOut=} [properties] Properties to set
                     */
                    function ScreenOut(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScreenOut format.
                     * @member {google.assistant.embedded.v1alpha2.ScreenOut.Format} format
                     * @memberof google.assistant.embedded.v1alpha2.ScreenOut
                     * @instance
                     */
                    ScreenOut.prototype.format = 0;

                    /**
                     * ScreenOut data.
                     * @member {Uint8Array} data
                     * @memberof google.assistant.embedded.v1alpha2.ScreenOut
                     * @instance
                     */
                    ScreenOut.prototype.data = $util.newBuffer([]);

                    /**
                     * Format enum.
                     * @name google.assistant.embedded.v1alpha2.ScreenOut.Format
                     * @enum {number}
                     * @property {string} FORMAT_UNSPECIFIED=FORMAT_UNSPECIFIED FORMAT_UNSPECIFIED value
                     * @property {string} HTML=HTML HTML value
                     */
                    ScreenOut.Format = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "FORMAT_UNSPECIFIED"] = "FORMAT_UNSPECIFIED";
                        values[valuesById[1] = "HTML"] = "HTML";
                        return values;
                    })();

                    return ScreenOut;
                })();

                v1alpha2.DeviceAction = (function() {

                    /**
                     * Properties of a DeviceAction.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IDeviceAction
                     * @property {string|null} [deviceRequestJson] DeviceAction deviceRequestJson
                     */

                    /**
                     * Constructs a new DeviceAction.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a DeviceAction.
                     * @implements IDeviceAction
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IDeviceAction=} [properties] Properties to set
                     */
                    function DeviceAction(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeviceAction deviceRequestJson.
                     * @member {string} deviceRequestJson
                     * @memberof google.assistant.embedded.v1alpha2.DeviceAction
                     * @instance
                     */
                    DeviceAction.prototype.deviceRequestJson = "";

                    return DeviceAction;
                })();

                v1alpha2.SpeechRecognitionResult = (function() {

                    /**
                     * Properties of a SpeechRecognitionResult.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface ISpeechRecognitionResult
                     * @property {string|null} [transcript] SpeechRecognitionResult transcript
                     * @property {number|null} [stability] SpeechRecognitionResult stability
                     */

                    /**
                     * Constructs a new SpeechRecognitionResult.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a SpeechRecognitionResult.
                     * @implements ISpeechRecognitionResult
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.ISpeechRecognitionResult=} [properties] Properties to set
                     */
                    function SpeechRecognitionResult(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SpeechRecognitionResult transcript.
                     * @member {string} transcript
                     * @memberof google.assistant.embedded.v1alpha2.SpeechRecognitionResult
                     * @instance
                     */
                    SpeechRecognitionResult.prototype.transcript = "";

                    /**
                     * SpeechRecognitionResult stability.
                     * @member {number} stability
                     * @memberof google.assistant.embedded.v1alpha2.SpeechRecognitionResult
                     * @instance
                     */
                    SpeechRecognitionResult.prototype.stability = 0;

                    return SpeechRecognitionResult;
                })();

                v1alpha2.DialogStateOut = (function() {

                    /**
                     * Properties of a DialogStateOut.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IDialogStateOut
                     * @property {string|null} [supplementalDisplayText] DialogStateOut supplementalDisplayText
                     * @property {Uint8Array|null} [conversationState] DialogStateOut conversationState
                     * @property {google.assistant.embedded.v1alpha2.DialogStateOut.MicrophoneMode|null} [microphoneMode] DialogStateOut microphoneMode
                     * @property {number|null} [volumePercentage] DialogStateOut volumePercentage
                     */

                    /**
                     * Constructs a new DialogStateOut.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a DialogStateOut.
                     * @implements IDialogStateOut
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IDialogStateOut=} [properties] Properties to set
                     */
                    function DialogStateOut(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DialogStateOut supplementalDisplayText.
                     * @member {string} supplementalDisplayText
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateOut
                     * @instance
                     */
                    DialogStateOut.prototype.supplementalDisplayText = "";

                    /**
                     * DialogStateOut conversationState.
                     * @member {Uint8Array} conversationState
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateOut
                     * @instance
                     */
                    DialogStateOut.prototype.conversationState = $util.newBuffer([]);

                    /**
                     * DialogStateOut microphoneMode.
                     * @member {google.assistant.embedded.v1alpha2.DialogStateOut.MicrophoneMode} microphoneMode
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateOut
                     * @instance
                     */
                    DialogStateOut.prototype.microphoneMode = 0;

                    /**
                     * DialogStateOut volumePercentage.
                     * @member {number} volumePercentage
                     * @memberof google.assistant.embedded.v1alpha2.DialogStateOut
                     * @instance
                     */
                    DialogStateOut.prototype.volumePercentage = 0;

                    /**
                     * MicrophoneMode enum.
                     * @name google.assistant.embedded.v1alpha2.DialogStateOut.MicrophoneMode
                     * @enum {number}
                     * @property {string} MICROPHONE_MODE_UNSPECIFIED=MICROPHONE_MODE_UNSPECIFIED MICROPHONE_MODE_UNSPECIFIED value
                     * @property {string} CLOSE_MICROPHONE=CLOSE_MICROPHONE CLOSE_MICROPHONE value
                     * @property {string} DIALOG_FOLLOW_ON=DIALOG_FOLLOW_ON DIALOG_FOLLOW_ON value
                     */
                    DialogStateOut.MicrophoneMode = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "MICROPHONE_MODE_UNSPECIFIED"] = "MICROPHONE_MODE_UNSPECIFIED";
                        values[valuesById[1] = "CLOSE_MICROPHONE"] = "CLOSE_MICROPHONE";
                        values[valuesById[2] = "DIALOG_FOLLOW_ON"] = "DIALOG_FOLLOW_ON";
                        return values;
                    })();

                    return DialogStateOut;
                })();

                v1alpha2.DebugConfig = (function() {

                    /**
                     * Properties of a DebugConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IDebugConfig
                     * @property {boolean|null} [returnDebugInfo] DebugConfig returnDebugInfo
                     */

                    /**
                     * Constructs a new DebugConfig.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a DebugConfig.
                     * @implements IDebugConfig
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IDebugConfig=} [properties] Properties to set
                     */
                    function DebugConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DebugConfig returnDebugInfo.
                     * @member {boolean} returnDebugInfo
                     * @memberof google.assistant.embedded.v1alpha2.DebugConfig
                     * @instance
                     */
                    DebugConfig.prototype.returnDebugInfo = false;

                    return DebugConfig;
                })();

                v1alpha2.DeviceLocation = (function() {

                    /**
                     * Properties of a DeviceLocation.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @interface IDeviceLocation
                     * @property {google.type.ILatLng|null} [coordinates] DeviceLocation coordinates
                     */

                    /**
                     * Constructs a new DeviceLocation.
                     * @memberof google.assistant.embedded.v1alpha2
                     * @classdesc Represents a DeviceLocation.
                     * @implements IDeviceLocation
                     * @constructor
                     * @param {google.assistant.embedded.v1alpha2.IDeviceLocation=} [properties] Properties to set
                     */
                    function DeviceLocation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DeviceLocation coordinates.
                     * @member {google.type.ILatLng|null|undefined} coordinates
                     * @memberof google.assistant.embedded.v1alpha2.DeviceLocation
                     * @instance
                     */
                    DeviceLocation.prototype.coordinates = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * DeviceLocation type.
                     * @member {"coordinates"|undefined} type
                     * @memberof google.assistant.embedded.v1alpha2.DeviceLocation
                     * @instance
                     */
                    Object.defineProperty(DeviceLocation.prototype, "type", {
                        get: $util.oneOfGetter($oneOfFields = ["coordinates"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    return DeviceLocation;
                })();

                return v1alpha2;
            })();

            return embedded;
        })();

        return assistant;
    })();

    return google;
})();

module.exports = $root;
