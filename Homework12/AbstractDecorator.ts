import { DecoratorInterface } from "./DecoratorInterface";

/**
 * 裝飾抽象類別
 */
export abstract class AbstractDecorator implements DecoratorInterface {

    /**
     * 折扣物件
     */
    private decorator: DecoratorInterface = null;

    /**
     * 建構子
     * @param component 折扣物件
     */
    public constructor(component: DecoratorInterface = null) {
        if (component !== null) {
            this.decorator = component;
        }
    }

    /**
     * 折扣前價格
     * @param price 價格
     */
    public GetPrice(price: number): number {
        return this.decorator === null ? price : this.decorator.GetPrice(price);
    }
}