<?php
declare(strict_types=1);

// BankLogos SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

BankLogosUtility::setRegistrar(function (BankLogosUtility $u): void {
    $u->clean = [BankLogosClean::class, 'call'];
    $u->done = [BankLogosDone::class, 'call'];
    $u->make_error = [BankLogosMakeError::class, 'call'];
    $u->feature_add = [BankLogosFeatureAdd::class, 'call'];
    $u->feature_hook = [BankLogosFeatureHook::class, 'call'];
    $u->feature_init = [BankLogosFeatureInit::class, 'call'];
    $u->fetcher = [BankLogosFetcher::class, 'call'];
    $u->make_fetch_def = [BankLogosMakeFetchDef::class, 'call'];
    $u->make_context = [BankLogosMakeContext::class, 'call'];
    $u->make_options = [BankLogosMakeOptions::class, 'call'];
    $u->make_request = [BankLogosMakeRequest::class, 'call'];
    $u->make_response = [BankLogosMakeResponse::class, 'call'];
    $u->make_result = [BankLogosMakeResult::class, 'call'];
    $u->make_point = [BankLogosMakePoint::class, 'call'];
    $u->make_spec = [BankLogosMakeSpec::class, 'call'];
    $u->make_url = [BankLogosMakeUrl::class, 'call'];
    $u->param = [BankLogosParam::class, 'call'];
    $u->prepare_auth = [BankLogosPrepareAuth::class, 'call'];
    $u->prepare_body = [BankLogosPrepareBody::class, 'call'];
    $u->prepare_headers = [BankLogosPrepareHeaders::class, 'call'];
    $u->prepare_method = [BankLogosPrepareMethod::class, 'call'];
    $u->prepare_params = [BankLogosPrepareParams::class, 'call'];
    $u->prepare_path = [BankLogosPreparePath::class, 'call'];
    $u->prepare_query = [BankLogosPrepareQuery::class, 'call'];
    $u->result_basic = [BankLogosResultBasic::class, 'call'];
    $u->result_body = [BankLogosResultBody::class, 'call'];
    $u->result_headers = [BankLogosResultHeaders::class, 'call'];
    $u->transform_request = [BankLogosTransformRequest::class, 'call'];
    $u->transform_response = [BankLogosTransformResponse::class, 'call'];
});
