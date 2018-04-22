import { IPrice } from "./IPrice";

/**
 * 薩爾達傳說
 */
export class Zelda implements IPrice {

    /** 價格 */
    static readonly PRICE: number = 2000;

    /**
     * 取得價格
     */
    GetPrice(): number {
        return Zelda.PRICE;
    }
}