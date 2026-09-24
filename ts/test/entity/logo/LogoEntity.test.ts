

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BankLogosSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('LogoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BANK_LOGOS_TEST_LIVE=TRUE.
  afterEach(liveDelay('BANK_LOGOS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BankLogosSDK.test()
    const ent = testsdk.Logo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BANK_LOGOS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bank_code":{"a":true,"h":"Bank Code","n":"bank_code","r":false,"sh":"Official bank code or identifier","t":"`$STRING`","key$":"bank_code","index$":0},"bank_name":{"a":true,"h":"Bank Name","n":"bank_name","r":false,"sh":"Official name of the bank","t":"`$STRING`","key$":"bank_name","index$":1},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country code where the bank operates","t":"`$STRING`","key$":"country","index$":2},"logo_url":{"a":true,"fo":"uri","h":"Logo Url","n":"logo_url","r":false,"sh":"URL to the bank logo image","t":"`$STRING`","key$":"logo_url","index$":3}},"name":"logo","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /logo","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"Chase","k":"query","n":"bank","or":"bank","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"US","k":"query","n":"country","or":"country","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"png","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":256,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/logo","q":{"exist":["bank","country","format","size"]},"r":{},"s":[{"lit":"logo"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"logo","name__orig":"logo","Name":"Logo","name_":"logo","name-":"logo","NAME":"LOGO","index$":0}, {"active":true,"entity":"logo","key$":"BasicLogoFlow","kind":"basic","name":"BasicLogoFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"logo_ref01","srcdatavar":"logo_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-logo_ref01"}}],"index$":0}]}, 'Logo', {"GET /logo":{"protocol":"http","operationId":"getBankLogo","responses":{"200":{"description":"Successfully retrieved bank logo","content":{"image/png":{"schema":{"type":"string","format":"binary"}},"image/svg+xml":{"schema":{"type":"string","format":"binary"}},"image/jpeg":{"schema":{"type":"string","format":"binary"}},"application/json":{"schema":{"type":"object","properties":{"bank_name":{"description":"Official name of the bank","key$":"bank_name","type":"string"},"logo_url":{"description":"URL to the bank logo image","format":"uri","key$":"logo_url","type":"string"},"country":{"description":"Country code where the bank operates","key$":"country","type":"string"},"bank_code":{"description":"Official bank code or identifier","key$":"bank_code","type":"string"}},"index$":0}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}}}}}},"401":{"description":"Unauthorized - invalid or missing API key","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Authentication error details"}}}}}},"404":{"description":"Bank logo not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Details about the missing bank"}}}}}},"429":{"description":"Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"retry_after":{"type":"integer","description":"Number of seconds to wait before retrying"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Internal error details"}}}}}}},"parameters":[{"name":"bank","in":"query","description":"Bank name or identifier to retrieve the logo for","required":true,"schema":{"type":"string"},"example":"Chase","index$":0},{"name":"country","in":"query","description":"ISO country code to narrow down bank search","required":false,"schema":{"type":"string","pattern":"^[A-Z]{2}$"},"example":"US","index$":1},{"name":"format","in":"query","description":"Desired image format for the logo","required":false,"schema":{"type":"string","enum":["png","svg","jpg"],"default":"png"},"index$":2},{"name":"size","in":"query","description":"Size of the logo image in pixels","required":false,"schema":{"type":"integer","minimum":32,"maximum":1024,"default":256},"index$":3}],"security":[{"ApiKeyAuth":[]}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"header","name":"X-API-Key","description":"API key for authentication. Required for all requests."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let logo_ref01_data = Object.values(setup.data.existing.logo)[0] as any

    // LOAD
    const logo_ref01_ent = client.Logo()
    const logo_ref01_match_dt0: any = {}
    const logo_ref01_data_dt0 = (await logo_ref01_ent.load(logo_ref01_match_dt0)).data()
    assert(null != logo_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logo/LogoTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BankLogosSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['logo01','logo02','logo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BANK_LOGOS_TEST_LOGO_ENTID': idmap,
    'BANK_LOGOS_TEST_LIVE': 'FALSE',
    'BANK_LOGOS_TEST_EXPLAIN': 'FALSE',
    'BANK_LOGOS_APIKEY': '',
  })

  idmap = env['BANK_LOGOS_TEST_LOGO_ENTID']

  const live = 'TRUE' === env.BANK_LOGOS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BANK_LOGOS_TEST_LOGO_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BankLogosSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
