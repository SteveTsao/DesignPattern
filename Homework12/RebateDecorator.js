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
 * 裝飾類別:滿千送百
 */
var RebateDecorator = /** @class */ (function (_super) {
    __extends(RebateDecorator, _super);
    function RebateDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 滿千送百
     * @param price 價格
     */
    RebateDecorator.prototype.GetPrice = function (price) {
        price = _super.prototype.GetPrice.call(this, price);
        return price >= 1000 ? (price - 100) : price;
    };
    return RebateDecorator;
}(AbstractDecorator_1.AbstractDecorator));
exports.RebateDecorator = RebateDecorator;
//# sourceMappingURL=RebateDecorator.js.map