
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BankLogosSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BankLogosSDK.test()
    equal(testsdk instanceof BankLogosSDK, true,
      'BankLogosSDK.test() must return a client synchronously')
  })

})
