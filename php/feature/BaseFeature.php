<?php
declare(strict_types=1);

// BankLogos SDK base feature

class BankLogosBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BankLogosContext $ctx, array $options): void {}
    public function PostConstruct(BankLogosContext $ctx): void {}
    public function PostConstructEntity(BankLogosContext $ctx): void {}
    public function SetData(BankLogosContext $ctx): void {}
    public function GetData(BankLogosContext $ctx): void {}
    public function GetMatch(BankLogosContext $ctx): void {}
    public function SetMatch(BankLogosContext $ctx): void {}
    public function PrePoint(BankLogosContext $ctx): void {}
    public function PreSpec(BankLogosContext $ctx): void {}
    public function PreRequest(BankLogosContext $ctx): void {}
    public function PreResponse(BankLogosContext $ctx): void {}
    public function PreResult(BankLogosContext $ctx): void {}
    public function PreDone(BankLogosContext $ctx): void {}
    public function PreUnexpected(BankLogosContext $ctx): void {}
}
