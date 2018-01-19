import { AbstractCreditCard } from "./AbstractCreditCard";
import { AuthResultDTO } from "./AuthResultDTO";

/**
 * 信用卡聯合中心授權物件
 */
export class NcccCreditCard extends AbstractCreditCard {

    /**
     * 實作授權
     */
    auth(): AuthResultDTO {
        return { 'code': 2, 'message': '信用卡聯合中心授權成功' } as AuthResultDTO;
    }
}