"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 抽象策略類別
 */
var AbstractStrategy = /** @class */ (function () {
    function AbstractStrategy() {
    }
    /**
     * 取得折扣後訂單金額
     * @param orderAmount 訂單金額
     */
    AbstractStrategy.prototype.getOrderAmount = function (orderAmount) {
        return this.calculateDiscount(orderAmount);
    };
    return AbstractStrategy;
}());
exports.AbstractStrategy = AbstractStrategy;
//# sourceMappingURL=AbstractStrategy.js.map