import { AbstractDecorator } from "./AbstractDecorator";

/**
 * 裝飾類別:滿千送百
 */
export class RebateDecorator extends AbstractDecorator {

    /**
     * 滿千送百
     * @param price 價格
     */
    public GetPrice(price: number) {
        price = super.GetPrice(price);
        return price >= 1000 ? (price - 100) : price;
    }
}