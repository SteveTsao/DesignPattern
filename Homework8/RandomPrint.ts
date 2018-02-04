import { AbstractPrint } from "./AbstractPrint";

/**
 * 文件隨機列印
 */
export class RandomPrint extends AbstractPrint {

    /**
     * 開啟
     */
    open(str: string) {
        this.doc.open(str);
    }

    /**
     * 關閉
     */
    close() {
        this.doc.close();
    }

    /**
     * 列印
     * @param str 內容
     */
    print(str: string) {
        this.doc.print(str);
    }

    /**
     * 隨機列印
     */
    display() {

        let n = Math.floor(Math.random() * 9);

        for (let i = 0; i <= n; i++) {
            this.print('line: ' + i);
        }
    }
}