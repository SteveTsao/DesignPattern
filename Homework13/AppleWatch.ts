import { IPrice } from "./IPrice";

/**
 * AppleWatch
 */
export class AppleWatch implements IPrice {

    /** 價格 */
    static readonly PRICE: number = 10000;

    /**
     * 取得價格
     */
    GetPrice(): number {
        return AppleWatch.PRICE;
    }
}