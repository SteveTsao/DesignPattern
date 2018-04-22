import { RebateDecorator } from "./RebateDecorator";
import { DecoratorInterface } from "./DecoratorInterface";
import { PointDecorator } from "./PointDecorator";
import { DiscountProxy } from "./DiscountProxy";
import { CouponProxy } from "./CouponProxy";
import { GiftProxy } from "./GiftProxy";
import { MemberService } from "./MemberService";
import { ActivityService } from "./ActivityService";

/**
 * 價格計算類別
 */
export class OrderService {

    /**
     * 計算折扣後價格
     * @param bank 卡別
     * @param price 價格
     */
    public Calculate(bank: string, price: number, member: string): number {

        let decorator: DecoratorInterface = null;
        let memberService: MemberService = new MemberService(member);

        switch (bank.toUpperCase()) {
            case 'CTBC': // 中信 = 滿千送百 + 全館八折(只限滿兩年會員) + 送100元折價券
                decorator = new RebateDecorator(decorator);
                price = decorator.GetPrice(price);
                decorator = new DiscountProxy(memberService);
                price = decorator.GetPrice(price)
                decorator = new CouponProxy(memberService);
                break;
            case 'TAISHIN': // 台新 = 全館八折(只限滿兩年會員) + 加一元多一件(只限活動期間) + 送100元折價券(只限會員)
                decorator = new DiscountProxy(memberService);
                price = decorator.GetPrice(price);
                decorator = new GiftProxy(new ActivityService());
                price = decorator.GetPrice(price);
                decorator = new CouponProxy(memberService);
                break;
            case 'CITI': // 花旗 = 滿千送百 + 紅利點數增加1000點 + 加一元多一件(只限活動期間)
            default:
                decorator = new PointDecorator(new RebateDecorator(decorator));
                price = decorator.GetPrice(price);
                decorator = new GiftProxy(new ActivityService());
                break;
        }

        return decorator.GetPrice(price);
    }
}