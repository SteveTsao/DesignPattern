import { ICardFactory } from "./ICardFactory";
import { ICreditCard } from "./ICreditCard";

/**
 * 信用卡授權工廠抽象類別
 */
export abstract class AbstractCardFactory implements ICardFactory {

    /**
     * 建立信用卡授權工廠抽象方法
     */
    abstract create(): ICreditCard;
} 