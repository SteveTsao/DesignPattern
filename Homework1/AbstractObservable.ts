/**
 * Observer 抽象類別 <typeScript無介面，所以用抽象類別>
 */
export abstract class AbstractObservalbe {

    /**
     * 註冊
     */
    public abstract registerObserver(observer: any);

    /**
     * 通知
     */
    public abstract notifyObservers();
}
