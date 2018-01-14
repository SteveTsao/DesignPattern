"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 信用卡聯合中心授權物件
 */
var NcccCreditCard = /** @class */ (function () {
    function NcccCreditCard() {
    }
    /**
     * 實作授權
     */
    NcccCreditCard.prototype.auth = function () {
        return { 'status': '1', 'message': '信用卡聯合中心授權成功' };
    };
    return NcccCreditCard;
}());
exports.NcccCreditCard = NcccCreditCard;
//# sourceMappingURL=NcccCreditCard.js.map