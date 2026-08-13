# BankLogos SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BankLogosUtility.registrar = ->(u) {
  u.clean = BankLogosUtilities::Clean
  u.done = BankLogosUtilities::Done
  u.make_error = BankLogosUtilities::MakeError
  u.feature_add = BankLogosUtilities::FeatureAdd
  u.feature_hook = BankLogosUtilities::FeatureHook
  u.feature_init = BankLogosUtilities::FeatureInit
  u.fetcher = BankLogosUtilities::Fetcher
  u.make_fetch_def = BankLogosUtilities::MakeFetchDef
  u.make_context = BankLogosUtilities::MakeContext
  u.make_options = BankLogosUtilities::MakeOptions
  u.make_request = BankLogosUtilities::MakeRequest
  u.make_response = BankLogosUtilities::MakeResponse
  u.make_result = BankLogosUtilities::MakeResult
  u.make_point = BankLogosUtilities::MakePoint
  u.make_spec = BankLogosUtilities::MakeSpec
  u.make_url = BankLogosUtilities::MakeUrl
  u.param = BankLogosUtilities::Param
  u.prepare_auth = BankLogosUtilities::PrepareAuth
  u.prepare_body = BankLogosUtilities::PrepareBody
  u.prepare_headers = BankLogosUtilities::PrepareHeaders
  u.prepare_method = BankLogosUtilities::PrepareMethod
  u.prepare_params = BankLogosUtilities::PrepareParams
  u.prepare_path = BankLogosUtilities::PreparePath
  u.prepare_query = BankLogosUtilities::PrepareQuery
  u.graphql_body = BankLogosUtilities::GraphqlBody
  u.graphql_errors = BankLogosUtilities::GraphqlErrors
  u.result_basic = BankLogosUtilities::ResultBasic
  u.result_body = BankLogosUtilities::ResultBody
  u.result_headers = BankLogosUtilities::ResultHeaders
  u.transform_request = BankLogosUtilities::TransformRequest
  u.transform_response = BankLogosUtilities::TransformResponse
}
