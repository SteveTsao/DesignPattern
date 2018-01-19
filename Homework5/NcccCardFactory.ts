import { ICreditCard } from "./ICreditCard";
import { AbstractCardFactory } from "./AbstractCardFactory";
import { NcccCreditCard } from "./NcccCreditCard";

/**
 * 信用卡聯合中心授權工廠
 */
export class NcccCardFactory extends AbstractCardFactory {

    /**
     * 建立信用卡聯合中心授權物件
     */
    create(): ICreditCard {
        return new NcccCreditCard();
    }
}