/**
 * 裝飾模式介面
 */
export interface DecoratorInterface {

    /**
     * 計算價格
     * @param price 價格
     */
    GetPrice(price: number): number;
}