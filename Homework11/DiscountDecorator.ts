import { AbstractDecorator } from "./AbstractDecorator";

/**
 * 裝飾類別:全館八折
 */
export class DiscountDecorator extends AbstractDecorator {

    /**
     * 全館八折
     * @param price 價格
     */
    public GetPrice(price: number): number {
        return super.GetPrice(price) * 0.8;
    }
}