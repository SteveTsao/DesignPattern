import { CathayCardFactory } from "./CathayCardFactory";
import { CtbcCardFactory } from "./CtbcCardFactory";
import { NcccCardFactory } from "./NcccCardFactory";
import { ICardFactory } from "./ICardFactory";
import { ICreditCard } from "./ICreditCard";

/**
 * 信用卡授權介面工廠
 */
export class CardFactory {

    /**
     * 信用卡授權介面集合
     */
    private static factories: Array<ICardFactory> = [new CathayCardFactory(), new CtbcCardFactory(), new NcccCardFactory()];

    /**
     * 回傳信用卡授權物件
     * @param factoryClass 信用卡授權閘道
     */
    static createFactory(factoryClass: string): ICreditCard {
        for (let i = 0; i < this.factories.length; i++) {
            let creditCard: ICreditCard = this.factories[i].create();
            if (creditCard.constructor['name'] === factoryClass) {
                return creditCard;
            }
        }

        throw new Error('factory no exists');
    }
}
