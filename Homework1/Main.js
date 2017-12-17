"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock_1 = require("./Clock");
var DigitalClock_1 = require("./DigitalClock");
/** 主程序: DigitalClock 註冊到 Clock 物件 */
new Clock_1.Clock().registerObserver(new DigitalClock_1.DigitalClock());
//# sourceMappingURL=Main.js.map