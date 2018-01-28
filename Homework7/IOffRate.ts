import { AbstractStrategy } from "./AbstractStrategy";
import { IStrategy } from "./IStrategy";

/**
 * 打折介面
 */
export interface IOffRate extends IStrategy {

    /**
     * 設定折扣
     */
    setOffRate(orderAmount: number): AbstractStrategy;
}