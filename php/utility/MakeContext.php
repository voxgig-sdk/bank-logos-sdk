<?php
declare(strict_types=1);

// BankLogos SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BankLogosMakeContext
{
    public static function call(array $ctxmap, ?BankLogosContext $basectx): BankLogosContext
    {
        return new BankLogosContext($ctxmap, $basectx);
    }
}
