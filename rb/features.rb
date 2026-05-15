# BankLogos SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BankLogosFeatures
  def self.make_feature(name)
    case name
    when "base"
      BankLogosBaseFeature.new
    when "test"
      BankLogosTestFeature.new
    else
      BankLogosBaseFeature.new
    end
  end
end
