import { AbstractDocument } from "./AbstractDocument";
import fs = require("fs");

/**
 * 實作文字檔案
 */
export class DocumentTxt extends AbstractDocument {

    /**
     * 是否開啟檔案
     */
    private path: string = '';

    /**
     * 檔案內容
     */
    private txt: string = '';

    /**
     * 開啟檔案
     */
    open(str: string) {

        if (this.path !== '') {
            throw new Error('檔案已開啟');
        }

        this.txt = '';
        this.path = str;
    }

    /**
     * 關閉檔案
     */
    close() {

        if (this.path === '') {
            throw new Error('檔案未開啟');
        }

        fs.writeFile(this.path, this.txt, (err) => {
            if (err) throw err;
        });

        this.path = '';
    }

    /**
     * 寫入檔案
     * @param str 檔案內容
     */
    print(str: string) {
        this.txt += str + '\n';
    }
}