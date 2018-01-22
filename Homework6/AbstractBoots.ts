import { AbstractProduction } from "./AbstractProduction";

/**
 * 抽象靴子類別
 */
export abstract class AbstractBoots extends AbstractProduction {

    /**
     * 建構子
     * @param prod 靴子
     */
    constructor(prod: string) {
        super('靴子=' + prod);
    }
}