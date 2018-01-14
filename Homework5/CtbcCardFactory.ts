import { AbstractCardFactory } from "./AbstractCardFactory";
import { AbstractCreditCard } from "./AbstractCreditCard";
import { CtbcCreditCard } from "./CtbcCreditCard";

/**
 * 中國信託信用卡授權工廠
 */
export class CtbcCardFactory implements AbstractCardFactory {

    /**
     * 建立中國信託信用卡授權物件
     */
    create(): AbstractCreditCard {
        return new CtbcCreditCard();
    }
}