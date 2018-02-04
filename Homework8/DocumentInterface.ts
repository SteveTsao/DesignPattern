/**
 * 文件介面
 */
export interface DocumentInterface {

    /**
     * 開啟
     */
    open(str: string);

    /**
     * 關閉
     */
    close();

    /**
     * 列印
     * @param str 內容
     */
    print(str: string);
}