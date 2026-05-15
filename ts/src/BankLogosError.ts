
import { Context } from './Context'


class BankLogosError extends Error {

  isBankLogosError = true

  sdk = 'BankLogos'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  BankLogosError
}

