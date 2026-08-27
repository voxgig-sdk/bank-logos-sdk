-- Typed models for the BankLogos SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Logo
---@field bank_code? string
---@field bank_name? string
---@field country? string
---@field logo_url? string

---@class LogoLoadMatch
---@field bank string
---@field country? string
---@field format? string
---@field size? number

local M = {}

return M
