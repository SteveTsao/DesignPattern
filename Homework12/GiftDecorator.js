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
 * 裝飾類別:加一元多一件
 */
var GiftDecorator = /** @class */ (function (_super) {
    __extends(GiftDecorator, _super);
    function GiftDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 加一元多一件
     * @param price 價格
     */
    GiftDecorator.prototype.GetPrice = function (price) {
        price = _super.prototype.GetPrice.call(this, price) + 1;
        console.log('加一元多一件');
        return price;
    };
    return GiftDecorator;
}(AbstractDecorator_1.AbstractDecorator));
exports.GiftDecorator = GiftDecorator;
//# sourceMappingURL=GiftDecorator.js.map