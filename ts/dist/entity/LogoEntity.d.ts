import { BankLogosEntityBase } from '../BankLogosEntityBase';
import type { BankLogosSDK } from '../BankLogosSDK';
import type { Control } from '../types';
import type { Logo, LogoLoadMatch } from '../BankLogosTypes';
declare class LogoEntity extends BankLogosEntityBase<Logo> {
    constructor(client: BankLogosSDK, entopts: any);
    make(this: LogoEntity): LogoEntity;
    load(this: any, reqmatch?: LogoLoadMatch, ctrl?: Control): Promise<LogoEntity>;
}
export { LogoEntity };
