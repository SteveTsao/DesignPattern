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
var AbstractProduction_1 = require("./AbstractProduction");
/**
 * 抽象靴子類別
 */
var AbstractBoots = /** @class */ (function (_super) {
    __extends(AbstractBoots, _super);
    /**
     * 建構子
     * @param prod 靴子
     */
    function AbstractBoots(prod) {
        return _super.call(this, '靴子=' + prod) || this;
    }
    return AbstractBoots;
}(AbstractProduction_1.AbstractProduction));
exports.AbstractBoots = AbstractBoots;
//# sourceMappingURL=AbstractBoots.js.map