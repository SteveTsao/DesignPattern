import { AbstractDecorator } from "./AbstractDecorator";

/**
 * 裝飾類別:送100元折價券
 */
export class CouponDecorator extends AbstractDecorator {

    /**
     * 送100元折價券
     * @param price 價格
     */
    public GetPrice(price: number): number {
        price = super.GetPrice(price);
        console.log('送100元折價券');
        return price;
    }
}