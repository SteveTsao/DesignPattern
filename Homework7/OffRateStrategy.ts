import { AbstractStrategy } from "./AbstractStrategy";
import { IOffRate } from "./IOffRate";

/**
 * 打折策略
 */
export class OffRateStrategy extends AbstractStrategy implements IOffRate {

    /**
     * 折扣比例
     */
    private offRate: number = 1;

    /**
     * 取得折扣後訂單金額
     * @param orderAmount 訂單金額
     */
    protected calculateDiscount(orderAmount: number): number {
        return orderAmount * this.offRate;
    }

    /**
     * 設定折扣
     */
    public setOffRate(rate: number) {
        this.offRate = rate
        return this;
    }
}