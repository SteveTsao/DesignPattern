import { DecoratorInterface } from "./DecoratorInterface";
import { GiftDecorator } from "./GiftDecorator";
import { ActivityService } from "./ActivityService";

/**
 * 代理模式類別:加一元多一件，只限會員
 */
export class GiftProxy {

    /** 裝飾類別:加一元多一件 */
    private decorator: DecoratorInterface = new GiftDecorator();

    /** 活動類別 */
    private activityService: ActivityService;

    /**
     * 建構子
     * @param activityService 活動類別
     */
    public constructor(activityService: ActivityService) {
        this.activityService = activityService;
    }

    /**
     * 加一元多一件，只限會員
     * @param price 價格
     */
    public GetPrice(price: number): number {
        return this.activityService.isActivate() ? this.decorator.GetPrice(price) : price;
    }
}