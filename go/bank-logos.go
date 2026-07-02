package voxgigbanklogossdk

import (
	"github.com/voxgig-sdk/bank-logos-sdk/go/core"
	"github.com/voxgig-sdk/bank-logos-sdk/go/entity"
	"github.com/voxgig-sdk/bank-logos-sdk/go/feature"
	_ "github.com/voxgig-sdk/bank-logos-sdk/go/utility"
)

// Type aliases preserve external API.
type BankLogosSDK = core.BankLogosSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BankLogosEntity = core.BankLogosEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BankLogosError = core.BankLogosError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewLogoEntityFunc = func(client *core.BankLogosSDK, entopts map[string]any) core.BankLogosEntity {
		return entity.NewLogoEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBankLogosSDK = core.NewBankLogosSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewBankLogosSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *BankLogosSDK  { return NewBankLogosSDK(nil) }
func Test() *BankLogosSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
