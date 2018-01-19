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
 * 國泰世華信用卡授權類別
 */
var CathayCreditCard = /** @class */ (function (_super) {
    __extends(CathayCreditCard, _super);
    function CathayCreditCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 實作授權
     */
    CathayCreditCard.prototype.auth = function () {
        return { 'code': 0, 'message': '國泰世華授權成功' };
    };
    return CathayCreditCard;
}(AbstractCreditCard_1.AbstractCreditCard));
exports.CathayCreditCard = CathayCreditCard;
//# sourceMappingURL=CathayCreditCard.js.map