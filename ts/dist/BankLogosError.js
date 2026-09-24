"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankLogosError = void 0;
class BankLogosError extends Error {
    isBankLogosError = true;
    sdk = 'BankLogos';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.BankLogosError = BankLogosError;
//# sourceMappingURL=BankLogosError.js.map