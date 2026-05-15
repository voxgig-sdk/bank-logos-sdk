# BankLogos SDK utility: feature_add
module BankLogosUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
