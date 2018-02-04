import { DocumentInterface } from "./DocumentInterface";

/**
 * 抽象文件
 */
export abstract class AbstractDocument implements DocumentInterface {

    /**
     * 開啟
     */
    abstract open(str: string);

    /**
     * 關閉
     */
    abstract close();

    /**
     * 列印
     * @param str 內容
     */
    abstract print(str: string);
}