import { Context } from './Context';
declare class BankLogosError extends Error {
    isBankLogosError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { BankLogosError };
