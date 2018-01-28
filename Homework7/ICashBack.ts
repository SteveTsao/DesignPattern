import { AbstractStrategy } from "./AbstractStrategy";
import { IStrategy } from "./IStrategy";

/**
 * 滿千送百策略介面
 */
export interface ICashBack extends IStrategy {

    /**
     * 設定優惠條件
     */
    setCashBack(full: number, sent: number): AbstractStrategy;
}