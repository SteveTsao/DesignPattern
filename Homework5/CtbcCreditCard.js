"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCreditCard_1 = require("./AbstractCreditCard");
/**
 * 中國信託信用卡授權物件
 */
var CtbcCreditCard = /** @class */ (function (_super) {
    __extends(CtbcCreditCard, _super);
    function CtbcCreditCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 實作授權
     */
    CtbcCreditCard.prototype.auth = function () {
        return { 'code': 1, 'message': '中國信託授權成功' };
    };
    return CtbcCreditCard;
}(AbstractCreditCard_1.AbstractCreditCard));
exports.CtbcCreditCard = CtbcCreditCard;
//# sourceMappingURL=CtbcCreditCard.js.map