"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Builder_1 = require("./Builder");
/**
 * 組裝INTEL處理器電腦:建造者實體類別
 */
var IntelBuilder = /** @class */ (function (_super) {
    __extends(IntelBuilder, _super);
    function IntelBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 組裝INTEL處理器
     */
    IntelBuilder.prototype.buildCPU = function () {
        this.computer.CPU = 'Core I7-4790 3.6GHz';
        return this;
    };
    /**
     * 組裝INTEL主機板
     */
    IntelBuilder.prototype.buildMB = function () {
        this.computer.MB = 'SABERTOOTH Z97 MARK1';
        return this;
    };
    return IntelBuilder;
}(Builder_1.Builder));
exports.IntelBuilder = IntelBuilder;
//# sourceMappingURL=IntelBuilder.js.map