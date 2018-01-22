import { AbstractProduction } from "./AbstractProduction";

/**
 * 抽象帽子類別
 */
export abstract class AbstractHat extends AbstractProduction {

    /**
     * 建構子
     * @param prod 帽子
     */
    constructor(prod: string) {
        super('帽子=' + prod);
    }
}