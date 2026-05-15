package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewLogoEntityFunc func(client *BankLogosSDK, entopts map[string]any) BankLogosEntity

