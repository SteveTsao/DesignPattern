/**
 * 代理者抽象類別
 */
export abstract class AbstractProxy {

    /**
     * 發送
     * @param topic 主題
     * @param message 訊息
     */
    public abstract publish(topic: string, message: any): void;
}