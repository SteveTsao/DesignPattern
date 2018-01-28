import { AbstractStrategy } from "./AbstractStrategy";
import { ICashBack } from "./ICashBack";

/**
 * 買千送百策略
 */
export class CashBackStrategry extends AbstractStrategy implements ICashBack {

    /**
     * 條件
     */
    private fullAmount: number = 1000;

    /**
     * 優惠
     */
    private sentAmount: number = 100;

    /**
     * 計算百千送百折扣後金額
     * @param orderAmount 訂單金額
     */
    protected calculateDiscount(orderAmount: number): number {
        return orderAmount >= this.fullAmount ? (orderAmount - this.sentAmount) : orderAmount;
    }

    /**
     * 設定優惠條件
     */
    public setCashBack(full: number, sent: number) {
        this.fullAmount = full;
        this.sentAmount = sent;
        return this;
    }
}