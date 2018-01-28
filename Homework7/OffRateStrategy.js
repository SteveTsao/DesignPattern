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
 * 打折策略
 */
var OffRateStrategy = /** @class */ (function (_super) {
    __extends(OffRateStrategy, _super);
    function OffRateStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 折扣比例
         */
        _this.offRate = 1;
        return _this;
    }
    /**
     * 取得折扣後訂單金額
     * @param orderAmount 訂單金額
     */
    OffRateStrategy.prototype.calculateDiscount = function (orderAmount) {
        return orderAmount * this.offRate;
    };
    /**
     * 設定折扣
     */
    OffRateStrategy.prototype.setOffRate = function (rate) {
        this.offRate = rate;
        return this;
    };
    return OffRateStrategy;
}(AbstractStrategy_1.AbstractStrategy));
exports.OffRateStrategy = OffRateStrategy;
//# sourceMappingURL=OffRateStrategy.js.map