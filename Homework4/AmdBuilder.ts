import { Builder } from "./Builder";

/**
 * 組裝AMD處理器電腦:建造者實體類別
 */
export class AmdBuilder extends Builder {

    /**
     * 組裝AMD處理器
     */
    public buildCPU(): this {
        this.computer.CPU = 'AMD-AM3+ FX9590 4.7G';
        return this;
    }

    /**
     * 組裝AMD主機板
     */
    public buildMB(): this {
        this.computer.MB = 'Crosshair V Formula-Z';
        return this;
    }
}