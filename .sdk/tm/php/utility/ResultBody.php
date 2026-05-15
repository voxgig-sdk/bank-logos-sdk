<?php
declare(strict_types=1);

// BankLogos SDK utility: result_body

class BankLogosResultBody
{
    public static function call(BankLogosContext $ctx): ?BankLogosResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
