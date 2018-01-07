import { Builder } from "./Builder";
import { Computer } from "./Computer";

/**
 * 指揮者類別
 */
export class Director {

    /**
     * 建造者物件
     */
    private builder: Builder;

    /**
     * 建構子
     * @param builders 注入建造者
     */
    constructor(builders: Builder) {
        this.builder = builders;
    }

    /**
     * 組裝電腦
     * @param hd 硬碟
     * @param ram 記憶體
     * @param vga 現視卡
     */
    public BuilderComputer(hd: string, ram: string, vga: string): Computer {
        return this.builder
            .buildCPU()
            .buildMB()
            .buildHD(hd)
            .buildRAM(ram)
            .buildVGA(vga)
            .getComputer();
    }
}