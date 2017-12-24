import { AbstractProxy } from "./AbstractProxy";

/**
 * 時鐘類別
 */
export class Clock {

    /** 代理者 */
    private _proxyObservable: AbstractProxy;

    /**
     * 建構子: 每秒執行 onTick
     */
    constructor(proxyObservable: AbstractProxy) {

        this._proxyObservable = proxyObservable;

        setInterval(() => {
            this._proxyObservable.publish('onTick', this.onTick());
        }, 1000);
    }

    /**
     * 取得時間
     */
    private onTick(): Array<number> {

        let now = new Date();

        return [now.getHours(), now.getMinutes(), now.getSeconds()];
    }
}
