import { AbstractSubscriber } from "./AbstractSubscriber";

/**
 * 電子鐘物件
 */
export class DigitalClock extends AbstractSubscriber {

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
     * @param arr 
     */
    public update(arr: Array<number>): void {
        console.log(this.right('00' + arr[0], 2) + ':' + this.right('00' + arr[1], 2) + ':' + this.right('00' + arr[2], 2));
    }
}
