import { PrintInterface } from "./PrintInterface";
import { DocumentInterface } from "./DocumentInterface";

/**
 * 抽象文件處理功能
 */
export abstract class AbstractPrint implements PrintInterface {

    /**
     * 文件
     */
    protected doc: DocumentInterface;

    /**
     * 建構子
     * @param docLib 文件
     */
    constructor(docLib: DocumentInterface) {
        this.doc = docLib;
    }

    /**
     * 開啟
     */
    public abstract open(str: string);

    /**
     * 關閉
     */
    public abstract close();

    /**
     * 列印
     * @param str 內容
     */
    public abstract print(str: string);

    /**
     * 顯示
     */
    public abstract display();
}