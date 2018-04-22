import { DecoratorInterface } from "./DecoratorInterface";
import { DiscountDecorator } from "./DiscountDecorator";
import { MemberService } from "./MemberService";

/**
 * 代理模式類別:全館八折，只限滿兩年會員
 */
export class DiscountProxy implements DecoratorInterface {

    /** 裝飾類別:全館八折 */
    private decorator: DecoratorInterface = new DiscountDecorator();

    /** 會員類別 */
    private memberService: MemberService;

    /**
     * 建構子
     * @param memberService 會員類別
     */
    public constructor(memberService: MemberService) {
        this.memberService = memberService;
    }

    /**
     * 全館八折，只限滿兩年會員
     * @param price 價格
     */
    public GetPrice(price: number): number {
        return this.memberService.isMemberTwoYear() ? this.decorator.GetPrice(price) : price;
    }
}