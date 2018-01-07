"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 電腦組裝:建造者抽象類別
 */
var Builder = /** @class */ (function () {
    function Builder() {
        /**
         * 電腦組件
         */
        this.computer = {};
    }
    /**
     * 組裝硬碟
     * @param str
     */
    Builder.prototype.buildHD = function (str) {
        this.computer.HD = str;
        return this;
    };
    /**
     * 組裝記憶體
     * @param str
     */
    Builder.prototype.buildRAM = function (str) {
        this.computer.RAM = str;
        return this;
    };
    /**
     * 組裝顯示卡
     * @param str
     */
    Builder.prototype.buildVGA = function (str) {
        this.computer.VGA = str;
        return this;
    };
    /**
     * 取得組裝電腦
     */
    Builder.prototype.getComputer = function () {
        return this.computer;
    };
    return Builder;
}());
exports.Builder = Builder;
//# sourceMappingURL=Builder.js.map