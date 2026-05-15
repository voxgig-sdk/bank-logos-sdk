-- BankLogos SDK error

local BankLogosError = {}
BankLogosError.__index = BankLogosError


function BankLogosError.new(code, msg, ctx)
  local self = setmetatable({}, BankLogosError)
  self.is_sdk_error = true
  self.sdk = "BankLogos"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BankLogosError:error()
  return self.msg
end


function BankLogosError:__tostring()
  return self.msg
end


return BankLogosError
