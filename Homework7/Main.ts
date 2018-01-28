import { CashBackStrategry } from "./CashBackStrategry";
import { OffRateStrategy } from "./OffRateStrategy";

/**
 * 滿千送百
 */
let cashBack = new CashBackStrategry();

console.log(cashBack.setCashBack(1000, 100).getOrderAmount(1200));

/**
 * 打8折
 */
let offRate = new OffRateStrategy();

console.log(offRate.setOffRate(0.8).getOrderAmount(1000));