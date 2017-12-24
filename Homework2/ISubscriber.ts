import { AbstractSubscriber } from "./AbstractSubscriber";

/**
 * 訂閱主題資料介面
 */
export interface ISubscriber {
    [index: string]: Array<AbstractSubscriber>;
}