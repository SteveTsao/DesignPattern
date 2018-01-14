import { AbstractCardFactory } from "./AbstractCardFactory";
import { CathayCardFactory } from "./CathayCardFactory";
import { CtbcCardFactory } from "./CtbcCardFactory";
import { NcccCardFactory } from "./NcccCardFactory";
import { AbstractCreditCard } from "./AbstractCreditCard";

/**
 * 信用卡授權介面工廠
 */
export class CardFactory {

    /**
     * 信用卡授權介面集合
     */
    static factories: Array<AbstractCardFactory> = [new CathayCardFactory(), new CtbcCardFactory(), new NcccCardFactory()];

    /**
     * 回傳信用卡授權物件
     * @param factoryClass 信用卡授權閘道
     */
    static createFactory(factoryClass: string): AbstractCreditCard {
        for (let i = 0; i < this.factories.length; i++) {
            let creditCard: AbstractCreditCard = this.factories[i].create();
            if (creditCard.constructor['name'] === factoryClass) {
                return creditCard;
            }
        }

        throw new Error('factory no exists');
    }
}
