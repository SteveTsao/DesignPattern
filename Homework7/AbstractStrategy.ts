import { IStrategy } from "./IStrategy";

/**
 * 抽象策略類別
 */
export abstract class AbstractStrategy implements IStrategy {

    /**
     * 計算折扣
     * @param orderAmount 訂單金額
     */
    protected abstract calculateDiscount(orderAmount: number): number;

    /**
     * 取得折扣後訂單金額
     * @param orderAmount 訂單金額
     */
    getOrderAmount(orderAmount: number): number {
        return this.calculateDiscount(orderAmount);
    }
}