import { AbstractClockDisplay } from "./AbstractClockDisplay";

/**
 * 電子鐘物件
 */
export class DigitalClock extends AbstractClockDisplay {

    /**
     * 取得字尾長度字串
     * @param str 字串
     * @param len 長度
     * @returns 字尾長度字串
     */
    private right(str: string, len: number): string {
        return str.substring(str.length - len);
    }

    /**
     * 顯示時間
     * @param hours 時
     * @param minutes 分 
     * @param seconds 秒
     */
    public update(hours: number, minutes: number, seconds: number): void {
        console.log(this.right('00' + hours, 2) + ':' + this.right('00' + minutes, 2) + ':' + this.right('00' + seconds, 2));
    }
}
