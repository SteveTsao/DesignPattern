"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 裝飾抽象類別
 */
var AbstractDecorator = /** @class */ (function () {
    /**
     * 建構子
     * @param component 折扣物件
     */
    function AbstractDecorator(component) {
        if (component === void 0) { component = null; }
        /**
         * 折扣物件
         */
        this.decorator = null;
        if (component !== null) {
            this.decorator = component;
        }
    }
    /**
     * 折扣前價格
     * @param price 價格
     */
    AbstractDecorator.prototype.GetPrice = function (price) {
        return this.decorator === null ? price : this.decorator.GetPrice(price);
    };
    return AbstractDecorator;
}());
exports.AbstractDecorator = AbstractDecorator;
//# sourceMappingURL=AbstractDecorator.js.map