"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CouponDecorator_1 = require("./CouponDecorator");
/**
 * 代理模式類別:送一百元折價券(只限會員)
 */
var CouponProxy = /** @class */ (function () {
    /**
     * 建構子
     * @param memberService 會員類別
     */
    function CouponProxy(memberService) {
        /** 裝飾類別:送一百元折價券 */
        this.decorator = new CouponDecorator_1.CouponDecorator();
        this.memberService = memberService;
    }
    /**
     * 送一百元折價券(只限會員)
     * @param price 價格
     */
    CouponProxy.prototype.GetPrice = function (price) {
        return this.memberService.isMember() ? this.decorator.GetPrice(price) : price;
    };
    return CouponProxy;
}());
exports.CouponProxy = CouponProxy;
//# sourceMappingURL=CouponProxy.js.map