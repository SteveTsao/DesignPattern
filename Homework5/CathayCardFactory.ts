import { ICreditCard } from "./ICreditCard";
import { AbstractCardFactory } from "./AbstractCardFactory";
import { CathayCreditCard } from "./CathayCreditCard";

/**
 * 國泰世華信用卡授權工廠
 */
export class CathayCardFactory extends AbstractCardFactory {

    /**
     * 建立國泰世華信用卡授權物件
     */
    public create(): ICreditCard {
        return new CathayCreditCard();
    }
}