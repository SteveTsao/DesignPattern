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
 * 裝飾類別:送100元折價券
 */
var CouponDecorator = /** @class */ (function (_super) {
    __extends(CouponDecorator, _super);
    function CouponDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 送100元折價券
     * @param price 價格
     */
    CouponDecorator.prototype.GetPrice = function (price) {
        price = _super.prototype.GetPrice.call(this, price);
        console.log('送100元折價券');
        return price;
    };
    return CouponDecorator;
}(AbstractDecorator_1.AbstractDecorator));
exports.CouponDecorator = CouponDecorator;
//# sourceMappingURL=CouponDecorator.js.map