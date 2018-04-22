import { IPrice } from "./IPrice";

/**
 * Switch
 */
export class Switch implements IPrice {

    /** 價格 */
    static readonly PRICE: number = 10000;

    /**
     * 取得價格
     */
    GetPrice(): number {
        return Switch.PRICE;
    }
}