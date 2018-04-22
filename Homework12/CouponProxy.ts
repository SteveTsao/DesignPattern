import { DecoratorInterface } from "./DecoratorInterface";
import { CouponDecorator } from "./CouponDecorator";
import { MemberService } from "./MemberService";

/**
 * 代理模式類別:送一百元折價券(只限會員)
 */
export class CouponProxy implements DecoratorInterface {

    /** 裝飾類別:送一百元折價券 */
    private decorator: DecoratorInterface = new CouponDecorator();

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
     * 送一百元折價券(只限會員)
     * @param price 價格
     */
    public GetPrice(price: number): number {
        return this.memberService.isMember() ? this.decorator.GetPrice(price) : price;
    }
}