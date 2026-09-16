"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('LogoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BANK_LOGOS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BANK_LOGOS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BankLogosSDK.test();
        const ent = testsdk.Logo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BANK_LOGOS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'logo.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "bank_code", "req": false, "short": "Official bank code or identifier", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "bank_name", "req": false, "short": "Official name of the bank", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "country", "req": false, "short": "Country code where the bank operates", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "uri", "name": "logo_url", "req": false, "short": "URL to the bank logo image", "type": "`$STRING`", "index$": 3 }], "name": "logo", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "Chase", "kind": "query", "name": "bank", "orig": "bank", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "US", "kind": "query", "name": "country", "orig": "country", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "png", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": 256, "kind": "query", "name": "size", "orig": "size", "reqd": false, "type": "`$INTEGER`", "index$": 3 }] }, "contract": { "id": "GET /logo", "json": "{\"operationId\":\"getBankLogo\",\"parameters\":[{\"description\":\"Bank name or identifier to retrieve the logo for\",\"example\":\"Chase\",\"in\":\"query\",\"name\":\"bank\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"ISO country code to narrow down bank search\",\"example\":\"US\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"pattern\":\"^[A-Z]{2}$\",\"type\":\"string\"}},{\"description\":\"Desired image format for the logo\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"png\",\"enum\":[\"png\",\"svg\",\"jpg\"],\"type\":\"string\"}},{\"description\":\"Size of the logo image in pixels\",\"in\":\"query\",\"name\":\"size\",\"required\":false,\"schema\":{\"default\":256,\"maximum\":1024,\"minimum\":32,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"bank_code\":{\"description\":\"Official bank code or identifier\",\"type\":\"string\"},\"bank_name\":{\"description\":\"Official name of the bank\",\"type\":\"string\"},\"country\":{\"description\":\"Country code where the bank operates\",\"type\":\"string\"},\"logo_url\":{\"description\":\"URL to the bank logo image\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}},\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/svg+xml\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successfully retrieved bank logo\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Authentication error details\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - invalid or missing API key\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Details about the missing bank\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bank logo not found\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"retry_after\":{\"description\":\"Number of seconds to wait before retrying\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Internal error details\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Required for all requests.\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/logo", "segments": [{ "lit": "logo" }], "select": { "exist": ["bank", "country", "format", "size"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "logo", "name__orig": "logo", "Name": "Logo", "name_": "logo", "name-": "logo", "NAME": "LOGO", "index$": 0 }, { "active": true, "entity": "logo", "key$": "BasicLogoFlow", "kind": "basic", "name": "BasicLogoFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "logo_ref01", "srcdatavar": "logo_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-logo_ref01" } }], "index$": 0 }] }, 'Logo');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let logo_ref01_data = Object.values(setup.data.existing.logo)[0];
        // LOAD
        const logo_ref01_ent = client.Logo();
        const logo_ref01_match_dt0 = {};
        const logo_ref01_data_dt0 = (await logo_ref01_ent.load(logo_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != logo_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/logo/LogoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BankLogosSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['logo01', 'logo02', 'logo03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BANK_LOGOS_TEST_LOGO_ENTID': idmap,
        'BANK_LOGOS_TEST_LIVE': 'FALSE',
        'BANK_LOGOS_TEST_EXPLAIN': 'FALSE',
        'BANK_LOGOS_APIKEY': '',
    });
    idmap = env['BANK_LOGOS_TEST_LOGO_ENTID'];
    const live = 'TRUE' === env.BANK_LOGOS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BANK_LOGOS_TEST_LOGO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BankLogosSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.BANK_LOGOS_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BANK_LOGOS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=LogoEntity.test.js.map