# BankLogos SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BankLogosFeatures
  def self.make_feature(name)
    case name
    when "base"
      BankLogosBaseFeature.new
    when "ratelimit"
      BankLogosRatelimitFeature.new
    when "retry"
      BankLogosRetryFeature.new
    when "test"
      BankLogosTestFeature.new
    when "timeout"
      BankLogosTimeoutFeature.new
    else
      BankLogosBaseFeature.new
    end
  end
end
