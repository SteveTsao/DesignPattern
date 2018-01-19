import { AuthResultDTO } from "./AuthResultDTO";

/**
 * 信用卡授權介面
 */
export interface ICreditCard {

    /**
     * 授權
     */
    auth(): AuthResultDTO;
}