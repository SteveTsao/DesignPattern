"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiscountDecorator_1 = require("./DiscountDecorator");
/**
 * 代理模式類別:全館八折，只限滿兩年會員
 */
var DiscountProxy = /** @class */ (function () {
    /**
     * 建構子
     * @param memberService 會員類別
     */
    function DiscountProxy(memberService) {
        /** 裝飾類別:全館八折 */
        this.decorator = new DiscountDecorator_1.DiscountDecorator();
        this.memberService = memberService;
    }
    /**
     * 全館八折，只限滿兩年會員
     * @param price 價格
     */
    DiscountProxy.prototype.GetPrice = function (price) {
        return this.memberService.isMemberTwoYear() ? this.decorator.GetPrice(price) : price;
    };
    return DiscountProxy;
}());
exports.DiscountProxy = DiscountProxy;
//# sourceMappingURL=DiscountProxy.js.map