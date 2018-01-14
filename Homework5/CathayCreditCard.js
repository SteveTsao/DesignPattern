"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 國泰世華信用卡授權類別
 */
var CathayCreditCard = /** @class */ (function () {
    function CathayCreditCard() {
    }
    /**
     * 實作授權
     */
    CathayCreditCard.prototype.auth = function () {
        return { 'status': '1', 'message': '國泰世華授權成功' };
    };
    return CathayCreditCard;
}());
exports.CathayCreditCard = CathayCreditCard;
//# sourceMappingURL=CathayCreditCard.js.map