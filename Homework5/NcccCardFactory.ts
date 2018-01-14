import { AbstractCardFactory } from "./AbstractCardFactory";
import { AbstractCreditCard } from "./AbstractCreditCard";
import { NcccCreditCard } from "./NcccCreditCard";

/**
 * 信用卡聯合中心授權工廠
 */
export class NcccCardFactory implements AbstractCardFactory {

    /**
     * 建立信用卡聯合中心授權物件
     */
    create(): AbstractCreditCard {
        return new NcccCreditCard();
    }
}