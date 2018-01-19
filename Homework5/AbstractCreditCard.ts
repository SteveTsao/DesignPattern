import { ICreditCard } from "./ICreditCard";
import { AuthResultDTO } from "./AuthResultDTO";

/**
 * 信用卡授權抽象類別
 */
export abstract class AbstractCreditCard implements ICreditCard {

    /**
     * 授權
     */
    abstract auth(): AuthResultDTO;
}
