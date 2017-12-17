import { Clock } from './Clock';
import { DigitalClock } from './DigitalClock';

/** 主程序: DigitalClock 註冊到 Clock 物件 */
new Clock().registerObserver(new DigitalClock());
