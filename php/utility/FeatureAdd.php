<?php
declare(strict_types=1);

// BankLogos SDK utility: feature_add

class BankLogosFeatureAdd
{
    public static function call(BankLogosContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
