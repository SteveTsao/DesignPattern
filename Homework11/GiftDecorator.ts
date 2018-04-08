import { AbstractDecorator } from "./AbstractDecorator";

/**
 * 裝飾類別:加一元多一件
 */
export class GiftDecorator extends AbstractDecorator {

    /**
     * 加一元多一件
     * @param price 價格
     */
    public GetPrice(price: number): number {
        price = super.GetPrice(price) + 1;
        console.log('加一元多一件');
        return price;
    }
}