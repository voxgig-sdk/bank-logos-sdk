# BankLogos SDK utility: make_context
require_relative '../core/context'
module BankLogosUtilities
  MakeContext = ->(ctxmap, basectx) {
    BankLogosContext.new(ctxmap, basectx)
  }
end
