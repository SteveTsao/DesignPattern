import { RebateDecorator } from "./RebateDecorator";
import { DiscountDecorator } from "./DiscountDecorator";
import { CouponDecorator } from "./CouponDecorator";
import { DecoratorInterface } from "./DecoratorInterface";
import { GiftDecorator } from "./GiftDecorator";
import { PointDecorator } from "./PointDecorator";

/**
 * 價格計算類別
 */
export class OrderService {

    /**
     * 計算折扣後價格
     * @param bank 卡別
     * @param price 價格
     */
    public Calculate(bank: string, price: number): number {

        let decorator: DecoratorInterface;

        switch (bank.toUpperCase()) {
            case 'CTBC': // 中信 = 滿千送百 + 全館八折 + 送100元折價券
                decorator = new CouponDecorator(new DiscountDecorator(new RebateDecorator(decorator)));
                break;
            case 'TAISHIN': // 台新 = 全館八折 + 加一元多一件 + 送100元折價券
                decorator = new CouponDecorator(new GiftDecorator(new DiscountDecorator(decorator)));
                break;
            case 'CITI': // 花旗 = 滿千送百 + 紅利點數增加1000點 + 加一元多一件
            default:
                decorator = new GiftDecorator(new PointDecorator(new RebateDecorator(decorator)));
                break;
        }

        return decorator.GetPrice(price);
    }
}