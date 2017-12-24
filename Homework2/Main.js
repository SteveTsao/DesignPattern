"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clock_1 = require("./Clock");
var DigitalClock_1 = require("./DigitalClock");
var ProxyObservable_1 = require("./ProxyObservable");
/** 主程序: DigitalClock 註冊到 Clock 物件 */
var proxyObservable = new ProxyObservable_1.ProxyObservable();
var digitalClock = new DigitalClock_1.DigitalClock('update');
new Clock_1.Clock(proxyObservable.subscribe('onTick', digitalClock));
/** 五秒後取消訂閱 */
setTimeout(function () {
    proxyObservable.unsubscribe('onTick', digitalClock);
}, 5000);
//# sourceMappingURL=Main.js.map