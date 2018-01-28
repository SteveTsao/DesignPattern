/**
 * 策略介面
 */
export interface IStrategy {

    /**
     * 取得折扣後訂單金額
     */
    getOrderAmount(orderAmount: number): number;
}