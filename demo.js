"use strict";
exports.__esModule = true;
exports.EmailRegExp = void 0;
var EmailRegExp = /** @class */ (function () {
    function EmailRegExp() {
        this.emailRegExp = /^[A-Z|0-9|a-z]{1}[a-z|0-9]*@[A-Z|0-9|a-z]+\.[a-z|A-Z|0-9]+$/;
    }
    EmailRegExp.prototype.validate = function (regex) {
        return this.emailRegExp.test(regex);
    };
    return EmailRegExp;
}());
exports.EmailRegExp = EmailRegExp;
