import { AbstractCreditCard } from "./AbstractCreditCard";
import { AuthResultDTO } from "./AuthResultDTO";

/**
 * 中國信託信用卡授權物件
 */
export class CtbcCreditCard extends AbstractCreditCard {

    /**
     * 實作授權
     */
    auth(): AuthResultDTO {
        return { 'code': 1, 'message': '中國信託授權成功' } as AuthResultDTO;
    }
}
