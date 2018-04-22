"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RebateDecorator_1 = require("./RebateDecorator");
var PointDecorator_1 = require("./PointDecorator");
var DiscountProxy_1 = require("./DiscountProxy");
var CouponProxy_1 = require("./CouponProxy");
var GiftProxy_1 = require("./GiftProxy");
var MemberService_1 = require("./MemberService");
var ActivityService_1 = require("./ActivityService");
/**
 * 價格計算類別
 */
var OrderService = /** @class */ (function () {
    function OrderService() {
    }
    /**
     * 計算折扣後價格
     * @param bank 卡別
     * @param price 價格
     */
    OrderService.prototype.Calculate = function (bank, price, member) {
        var decorator = null;
        var memberService = new MemberService_1.MemberService(member);
        switch (bank.toUpperCase()) {
            case 'CTBC':// 中信 = 滿千送百 + 全館八折(只限滿兩年會員) + 送100元折價券
                decorator = new RebateDecorator_1.RebateDecorator(decorator);
                price = decorator.GetPrice(price);
                decorator = new DiscountProxy_1.DiscountProxy(memberService);
                price = decorator.GetPrice(price);
                decorator = new CouponProxy_1.CouponProxy(memberService);
                break;
            case 'TAISHIN':// 台新 = 全館八折(只限滿兩年會員) + 加一元多一件(只限活動期間) + 送100元折價券(只限會員)
                decorator = new DiscountProxy_1.DiscountProxy(memberService);
                price = decorator.GetPrice(price);
                decorator = new GiftProxy_1.GiftProxy(new ActivityService_1.ActivityService());
                price = decorator.GetPrice(price);
                decorator = new CouponProxy_1.CouponProxy(memberService);
                break;
            case 'CITI': // 花旗 = 滿千送百 + 紅利點數增加1000點 + 加一元多一件(只限活動期間)
            default:
                decorator = new PointDecorator_1.PointDecorator(new RebateDecorator_1.RebateDecorator(decorator));
                price = decorator.GetPrice(price);
                decorator = new GiftProxy_1.GiftProxy(new ActivityService_1.ActivityService());
                break;
        }
        return decorator.GetPrice(price);
    };
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=OrderService.js.map