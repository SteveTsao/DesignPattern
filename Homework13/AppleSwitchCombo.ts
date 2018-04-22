import { IPrice } from "./IPrice";
import { AppleCombo } from "./AppleCombo";
import { SwitchCombo } from "./SwitchCombo";

/**
 * Apple x Switch 套餐組合
 */
export class AppleSwitchCombo implements IPrice {

    /** 折扣 */
    static readonly DISCOUNT: number = 1000;

    /** 組合 */
    private prices: Array<IPrice> = [new AppleCombo(), new SwitchCombo()];

    /**
     * 取得價格
     */
    GetPrice(): number {
        let total = AppleSwitchCombo.DISCOUNT;
        this.prices.forEach(x => total += x.GetPrice());
        return total;
    }
}