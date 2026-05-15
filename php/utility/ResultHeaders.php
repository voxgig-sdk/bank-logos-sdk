<?php
declare(strict_types=1);

// BankLogos SDK utility: result_headers

class BankLogosResultHeaders
{
    public static function call(BankLogosContext $ctx): ?BankLogosResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
