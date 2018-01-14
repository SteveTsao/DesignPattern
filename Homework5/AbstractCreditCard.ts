import { AuthResultDTO } from "./AuthResultDTO";

/**
 * 信用卡授權抽象介面
 */
export abstract class AbstractCreditCard {
    abstract auth(): AuthResultDTO;
}
