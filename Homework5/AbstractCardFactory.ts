import { AbstractCreditCard } from "./AbstractCreditCard";

/**
 * 信用卡授權工廠介面
 */
export abstract class AbstractCardFactory {

    /**
     * 建立信用卡授權工廠抽象方法
     */
    abstract create(): AbstractCreditCard;
} 