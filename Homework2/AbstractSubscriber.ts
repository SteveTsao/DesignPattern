/**
 * 訂閱者抽象類別
 */
export abstract class AbstractSubscriber {

    /**
     * 處理訊息
     */
    private _method: string;

    /**
     * 建構子
     * @param method 
     */
    constructor(method: string) {
        this._method = method;
    }

    /**
     * 通知訊息
     * @param message 訊息
     */
    public notify(message: any): void {
        this[this._method](message);
    }
}