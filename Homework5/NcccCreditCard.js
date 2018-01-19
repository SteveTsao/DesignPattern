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
 * 信用卡聯合中心授權物件
 */
var NcccCreditCard = /** @class */ (function (_super) {
    __extends(NcccCreditCard, _super);
    function NcccCreditCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 實作授權
     */
    NcccCreditCard.prototype.auth = function () {
        return { 'code': 2, 'message': '信用卡聯合中心授權成功' };
    };
    return NcccCreditCard;
}(AbstractCreditCard_1.AbstractCreditCard));
exports.NcccCreditCard = NcccCreditCard;
//# sourceMappingURL=NcccCreditCard.js.map