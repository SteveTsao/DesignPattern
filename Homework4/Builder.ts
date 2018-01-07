import { Computer } from "./Computer";

/**
 * 電腦組裝:建造者抽象類別
 */
export abstract class Builder {

    /**
     * 電腦組件
     */
    protected computer: Computer = {} as Computer;

    /**
     * 組裝處理器抽象方法
     */
    abstract buildCPU(): this;

    /**
     * 組裝主機板抽象方法
     */
    abstract buildMB(): this;

    /**
     * 組裝硬碟
     * @param str 
     */
    buildHD(str: string): this {
        this.computer.HD = str;
        return this;
    }

    /**
     * 組裝記憶體
     * @param str
     */
    buildRAM(str: string): this {
        this.computer.RAM = str;
        return this;
    }

    /**
     * 組裝顯示卡
     * @param str 
     */
    buildVGA(str: string): this {
        this.computer.VGA = str;
        return this;
    }

    /**
     * 取得組裝電腦
     */
    getComputer(): Computer {
        return this.computer;
    }
}