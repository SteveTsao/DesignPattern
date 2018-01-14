"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 中國信託信用卡授權物件
 */
var CtbcCreditCard = /** @class */ (function () {
    function CtbcCreditCard() {
    }
    /**
     * 實作授權
     */
    CtbcCreditCard.prototype.auth = function () {
        return { 'status': '1', 'message': '中國信託授權成功' };
    };
    return CtbcCreditCard;
}());
exports.CtbcCreditCard = CtbcCreditCard;
//# sourceMappingURL=CtbcCreditCard.js.map