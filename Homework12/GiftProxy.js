"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GiftDecorator_1 = require("./GiftDecorator");
/**
 * 代理模式類別:加一元多一件，只限會員
 */
var GiftProxy = /** @class */ (function () {
    /**
     * 建構子
     * @param activityService 活動類別
     */
    function GiftProxy(activityService) {
        /** 裝飾類別:加一元多一件 */
        this.decorator = new GiftDecorator_1.GiftDecorator();
        this.activityService = activityService;
    }
    /**
     * 加一元多一件，只限會員
     * @param price 價格
     */
    GiftProxy.prototype.GetPrice = function (price) {
        return this.activityService.isActivate() ? this.decorator.GetPrice(price) : price;
    };
    return GiftProxy;
}());
exports.GiftProxy = GiftProxy;
//# sourceMappingURL=GiftProxy.js.map