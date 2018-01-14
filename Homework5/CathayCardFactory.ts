import { AbstractCardFactory } from "./AbstractCardFactory";
import { AbstractCreditCard } from "./AbstractCreditCard";
import { CathayCreditCard } from "./CathayCreditCard";

/**
 * 國泰世華信用卡授權工廠
 */
export class CathayCardFactory implements AbstractCardFactory {

    /**
     * 建立國泰世華信用卡授權物件
     */
    public create(): AbstractCreditCard {
        return new CathayCreditCard();
    }
}