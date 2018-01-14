import { AbstractCreditCard } from "./AbstractCreditCard";
import { AuthResultDTO } from "./AuthResultDTO";

/**
 * 中國信託信用卡授權物件
 */
export class CtbcCreditCard implements AbstractCreditCard {

    /**
     * 實作授權
     */
    auth(): AuthResultDTO {
        return { 'status': '1', 'message': '中國信託授權成功' } as AuthResultDTO;
    }
}
