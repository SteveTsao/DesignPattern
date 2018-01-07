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
 * 組裝AMD處理器電腦:建造者實體類別
 */
var AmdBuilder = /** @class */ (function (_super) {
    __extends(AmdBuilder, _super);
    function AmdBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 組裝AMD處理器
     */
    AmdBuilder.prototype.buildCPU = function () {
        this.computer.CPU = 'AMD-AM3+ FX9590 4.7G';
        return this;
    };
    /**
     * 組裝AMD主機板
     */
    AmdBuilder.prototype.buildMB = function () {
        this.computer.MB = 'Crosshair V Formula-Z';
        return this;
    };
    return AmdBuilder;
}(Builder_1.Builder));
exports.AmdBuilder = AmdBuilder;
//# sourceMappingURL=AmdBuilder.js.map