import { ICreditCard } from "./ICreditCard";
import { AbstractCardFactory } from "./AbstractCardFactory";
import { CtbcCreditCard } from "./CtbcCreditCard";

/**
 * 中國信託信用卡授權工廠
 */
export class CtbcCardFactory extends AbstractCardFactory {

    /**
     * 建立中國信託信用卡授權物件
     */
    create(): ICreditCard {
        return new CtbcCreditCard();
    }
}