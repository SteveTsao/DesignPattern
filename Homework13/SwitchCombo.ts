import { IPrice } from "./IPrice";
import { Switch } from "./Swtich";
import { Zelda } from "./Zelda";

/**
 * Switch 組合
 */
export class SwitchCombo implements IPrice {

    /** 折扣 */
    static readonly DISCOUNT: number = 0.9;

    /** 組合 */
    private prices: Array<IPrice> = [new Switch(), new Zelda()];

    /**
     * 取得價格
     */
    GetPrice(): number {
        let total = 0;
        this.prices.forEach(x => total += x.GetPrice());
        return total * SwitchCombo.DISCOUNT;
    }
}