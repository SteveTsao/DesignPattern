import { AbstractProduction } from "./AbstractProduction";

/**
 * 頭盔抽象類別
 */
export abstract class AbstractHelmet extends AbstractProduction {

    /**
     * 建構子
     * @param prod 頭盔
     */
    constructor(prod: string) {
        super('頭盔=' + prod);
    }
}