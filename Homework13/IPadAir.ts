import { IPrice } from "./IPrice";

/**
 * IPadAir
 */
export class IPadAir implements IPrice {

    /** 價格 */
    static readonly PRICE: number = 10000;

    /**
     * 取得價格
     */
    GetPrice(): number {
        return IPadAir.PRICE;
    }
} 