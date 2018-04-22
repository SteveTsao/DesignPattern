import { IPrice } from "./IPrice";
import { MacbookPro } from "./MacbookPro";
import { IPadAir } from "./IPadAir";
import { AppleWatch } from "./AppleWatch";

/**
 * Apple 套餐組合
 */
export class AppleCombo implements IPrice {

    /** 折扣 */
    static readonly DISCOUNT: number = 0.9;

    /** 組合 */
    private prices: Array<IPrice> = [new MacbookPro(), new IPadAir(), new AppleWatch()];

    /**
     * 取得價格
     */
    GetPrice(): number {
        let total = 0;
        this.prices.forEach(x => total += x.GetPrice());
        return total * AppleCombo.DISCOUNT;
    }
}