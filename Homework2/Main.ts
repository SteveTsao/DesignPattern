import { Clock } from './Clock';
import { DigitalClock } from './DigitalClock';
import { ProxyObservable } from './ProxyObservable';

/** 主程序: DigitalClock 註冊到 Clock 物件 */

let proxyObservable = new ProxyObservable();
let digitalClock = new DigitalClock('update');

new Clock(proxyObservable.subscribe('onTick', digitalClock));

/** 五秒後取消訂閱 */
setTimeout(() => {
    proxyObservable.unsubscribe('onTick', digitalClock);
}, 5000);
