/**
 * 抽象 Cosplay 服裝配件類別
 */
export abstract class AbstractProduction {

    /**
     * 配件
     */
    protected production: string;

    /**
     * 建構子
     * @param prod 配件
     */
    constructor(prod: string) {
        this.production = prod;
    }

    /**
     * 抽象製造配件方法
     */
    abstract make();
}