/**
 * 顯示時間抽象類別 <typeScript無介面，所以用抽象類別>
 */
export abstract class AbstractClockDisplay {

    /**
     * 顯示時間
     * @param hours 時
     * @param minutes 分 
     * @param seconds 秒
     */
    public abstract update(hours: number, minutes: number, seconds: number): void;
}
