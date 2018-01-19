import { ICreditCard } from "./ICreditCard";

/**
 * 信用卡授權工廠介面
 */
export interface ICardFactory {

    /**
     * 建立信用卡授權工廠
     */
    create(): ICreditCard
}