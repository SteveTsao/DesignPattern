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
var AbstractStrategy_1 = require("./AbstractStrategy");
/**
 * 買千送百策略
 */
var CashBackStrategry = /** @class */ (function (_super) {
    __extends(CashBackStrategry, _super);
    function CashBackStrategry() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 條件
         */
        _this.fullAmount = 1000;
        /**
         * 優惠
         */
        _this.sentAmount = 100;
        return _this;
    }
    /**
     * 計算百千送百折扣後金額
     * @param orderAmount 訂單金額
     */
    CashBackStrategry.prototype.calculateDiscount = function (orderAmount) {
        return orderAmount >= this.fullAmount ? (orderAmount - this.sentAmount) : orderAmount;
    };
    /**
     * 設定優惠條件
     */
    CashBackStrategry.prototype.setCashBack = function (full, sent) {
        this.fullAmount = full;
        this.sentAmount = sent;
        return this;
    };
    return CashBackStrategry;
}(AbstractStrategy_1.AbstractStrategy));
exports.CashBackStrategry = CashBackStrategry;
//# sourceMappingURL=CashBackStrategry.js.map