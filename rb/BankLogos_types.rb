# frozen_string_literal: true

# Typed models for the BankLogos SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Logo entity data model.
#
# @!attribute [rw] bank_code
#   @return [String, nil]
#
# @!attribute [rw] bank_name
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] logo_url
#   @return [String, nil]
Logo = Struct.new(
  :bank_code,
  :bank_name,
  :country,
  :logo_url,
  keyword_init: true
)

# Request payload for Logo#load.
#
# @!attribute [rw] bank
#   @return [String]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
LogoLoadMatch = Struct.new(
  :bank,
  :country,
  :format,
  :size,
  keyword_init: true
)

