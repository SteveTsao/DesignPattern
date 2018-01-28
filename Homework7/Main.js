"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CashBackStrategry_1 = require("./CashBackStrategry");
var OffRateStrategy_1 = require("./OffRateStrategy");
/**
 * 滿千送百
 */
var cashBack = new CashBackStrategry_1.CashBackStrategry();
console.log(cashBack.setCashBack(1000, 100).getOrderAmount(1200));
/**
 * 打8折
 */
var offRate = new OffRateStrategy_1.OffRateStrategy();
console.log(offRate.setOffRate(0.8).getOrderAmount(1000));
//# sourceMappingURL=Main.js.map