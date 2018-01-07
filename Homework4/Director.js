"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 指揮者類別
 */
var Director = /** @class */ (function () {
    /**
     * 建構子
     * @param builders 注入建造者
     */
    function Director(builders) {
        this.builder = builders;
    }
    /**
     * 組裝電腦
     * @param hd 硬碟
     * @param ram 記憶體
     * @param vga 現視卡
     */
    Director.prototype.BuilderComputer = function (hd, ram, vga) {
        return this.builder
            .buildCPU()
            .buildMB()
            .buildHD(hd)
            .buildRAM(ram)
            .buildVGA(vga)
            .getComputer();
    };
    return Director;
}());
exports.Director = Director;
//# sourceMappingURL=Director.js.map