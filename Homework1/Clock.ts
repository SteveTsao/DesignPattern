import { AbstractObservalbe } from './AbstractObservable';
import { AbstractClockDisplay } from './AbstractClockDisplay';

/**
 * 時鐘類別
 */
export class Clock extends AbstractObservalbe {

    /** 時 */
    private _hours: number = 0;

    /** 分 */
    private _minutes: number = 0;

    /** 秒 */
    private _seconds: number = 0;

    /** 註冊物件 */
    private observers: Array<AbstractClockDisplay> = [];

    /**
     * 建構子: 每秒執行 onTick
     */
    constructor() {
        super();

        setInterval(() => {
            this.onTick();
        }, 1000);
    }

    /**
     * 取得時間
     */
    private onTick(): void {
        let now = new Date();

        this._hours = now.getHours();
        this._minutes = now.getMinutes();
        this._seconds = now.getSeconds();

        this.notifyObservers();
    }

    /**
     * 註冊
     * @param observer 
     */
    public registerObserver(observer: AbstractClockDisplay) {
        this.observers.push(observer);
    }

    /**
     * 通知
     */
    public notifyObservers(): void {
        this.observers.forEach((observer: AbstractClockDisplay) => {
            observer.update(this._hours, this._minutes, this._seconds);
        });
    }
}
