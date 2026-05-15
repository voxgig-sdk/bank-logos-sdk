<?php
declare(strict_types=1);

// BankLogos SDK utility: feature_hook

class BankLogosFeatureHook
{
    public static function call(BankLogosContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
