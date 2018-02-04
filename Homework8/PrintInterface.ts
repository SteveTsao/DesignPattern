/**
 * 文件處理功能介面
 */
export interface PrintInterface {

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

    /**
     * 顯示
     */
    display();
}