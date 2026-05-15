<?php
declare(strict_types=1);

// BankLogos SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class BankLogosFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new BankLogosBaseFeature();
            case "test":
                return new BankLogosTestFeature();
            default:
                return new BankLogosBaseFeature();
        }
    }
}
