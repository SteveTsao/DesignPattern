import { AbstractProxy } from "./AbstractProxy";
import { AbstractSubscriber } from "./AbstractSubscriber";
import { ISubscriber } from "./ISubscriber";

/**
 * 代理者
 */
export class ProxyObservable extends AbstractProxy {

    /** 主題訂閱者 */
    private observers: ISubscriber = {};

    /**
     * 註冊
     * @param topic 主題
     * @param observer 訂閱者
     */
    public subscribe(topic: string, observer: AbstractSubscriber) {

        if (!this.observers.hasOwnProperty(topic)) {
            this.observers[topic] = [];
        }

        this.observers[topic].push(observer);

        return this;
    }

    /**
     * 取消註冊
     * @param topic 主題
     * @param observer 訂閱者 
     */
    public unsubscribe(topic: string, observer: AbstractSubscriber) {

        for (let i = this.observers[topic].length; i >= 0; i++) {
            if (this.observers[topic][i] === observer) {
                delete this.observers[topic][i];
            }
        }

        return this;
    }

    /**
     * 通知
     * @param topic 主體
     * @param message 訊息
     */
    public publish(topic: string, message: any) {

        this.observers[topic].forEach((observer: AbstractSubscriber) => {
            observer.notify(message);
        });

        return this;
    }
}
