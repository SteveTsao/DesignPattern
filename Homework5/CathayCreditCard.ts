import { AbstractCreditCard } from "./AbstractCreditCard";
import { AuthResultDTO } from "./AuthResultDTO";

/**
 * 國泰世華信用卡授權類別
 */
export class CathayCreditCard extends AbstractCreditCard {

    /**
     * 實作授權
     */
    auth(): AuthResultDTO {
        return { 'code': 0, 'message': '國泰世華授權成功' } as AuthResultDTO;
    }
}
