import { AbstractProduction } from "./AbstractProduction";

/**
 * 抽象盔甲類別
 */
export abstract class AbstractArmor extends AbstractProduction {

    /**
     * 建構子
     * @param prod 盔甲
     */
    constructor(prod: string) {
        super('盔甲=' + prod);
    }
}