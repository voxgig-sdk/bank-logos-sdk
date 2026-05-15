<?php
declare(strict_types=1);

// BankLogos SDK utility: prepare_body

class BankLogosPrepareBody
{
    public static function call(BankLogosContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
