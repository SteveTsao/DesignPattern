"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CtbcCreditCard_1 = require("./CtbcCreditCard");
/**
 * 中國信託信用卡授權工廠
 */
var CtbcCardFactory = /** @class */ (function () {
    function CtbcCardFactory() {
    }
    /**
     * 建立中國信託信用卡授權物件
     */
    CtbcCardFactory.prototype.create = function () {
        return new CtbcCreditCard_1.CtbcCreditCard();
    };
    return CtbcCardFactory;
}());
exports.CtbcCardFactory = CtbcCardFactory;
//# sourceMappingURL=CtbcCardFactory.js.map