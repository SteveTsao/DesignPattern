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
var AbstractDecorator_1 = require("./AbstractDecorator");
/**
 * 裝飾類別:全館八折
 */
var DiscountDecorator = /** @class */ (function (_super) {
    __extends(DiscountDecorator, _super);
    function DiscountDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 全館八折
     * @param price 價格
     */
    DiscountDecorator.prototype.GetPrice = function (price) {
        return _super.prototype.GetPrice.call(this, price) * 0.8;
    };
    return DiscountDecorator;
}(AbstractDecorator_1.AbstractDecorator));
exports.DiscountDecorator = DiscountDecorator;
//# sourceMappingURL=DiscountDecorator.js.map