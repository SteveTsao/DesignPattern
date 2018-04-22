import { IPrice } from "./IPrice";
import { AppleSwitchCombo } from "./AppleSwitchCombo";

let Price: IPrice = new AppleSwitchCombo();

// Apple x Switch 套餐組合
console.log(Price.GetPrice());