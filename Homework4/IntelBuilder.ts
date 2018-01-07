import { Builder } from "./Builder";

/**
 * 組裝INTEL處理器電腦:建造者實體類別
 */
export class IntelBuilder extends Builder {

    /**
     * 組裝INTEL處理器
     */
    public buildCPU(): this {
        this.computer.CPU = 'Core I7-4790 3.6GHz';
        return this;
    }

    /**
     * 組裝INTEL主機板
     */
    public buildMB(): this {
        this.computer.MB = 'SABERTOOTH Z97 MARK1';
        return this;
    }
}