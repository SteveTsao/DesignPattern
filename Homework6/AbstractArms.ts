import { AbstractProduction } from "./AbstractProduction";

/**
 * 抽象武器類別
 */
export abstract class AbstractArms extends AbstractProduction {

    /**
     * 建構子
     * @param prod 武器
     */
    constructor(prod: string) {
        super('武器=' + prod);
    }
}