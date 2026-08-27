// Typed models for the BankLogos SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Logo {
  bank_code?: string
  bank_name?: string
  country?: string
  logo_url?: string
}

export interface LogoLoadMatch {
  bank: string
  country?: string
  format?: string
  size?: number
}

