export interface Logo {
    bank_code?: string;
    bank_name?: string;
    country?: string;
    logo_url?: string;
}
export interface LogoLoadMatch {
    bank: string;
    country?: string;
    format?: string;
    size?: number;
}
