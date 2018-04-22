import { IPrice } from "./IPrice";

/**
 * Macbook Pro
 */
export class MacbookPro implements IPrice {

    /** 價格 */
    static readonly PRICE: number = 60000;

    /**
     * 取得價格
     */
    GetPrice(): number {
        return MacbookPro.PRICE;
    }
}