import { AbstractDecorator } from "./AbstractDecorator";

/**
 * 裝飾類別:紅利點數增加1000點
 */
export class PointDecorator extends AbstractDecorator {

    /**
     * 紅利點數增加1000點
     * @param price 價格
     */
    public GetPrice(price: number): number {
        price = super.GetPrice(price);
        console.log('紅利點數增加1000點');
        return price;
    }
}