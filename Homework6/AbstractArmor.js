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
 * 抽象盔甲類別
 */
var AbstractArmor = /** @class */ (function (_super) {
    __extends(AbstractArmor, _super);
    /**
     * 建構子
     * @param prod 盔甲
     */
    function AbstractArmor(prod) {
        return _super.call(this, '盔甲=' + prod) || this;
    }
    return AbstractArmor;
}(AbstractProduction_1.AbstractProduction));
exports.AbstractArmor = AbstractArmor;
//# sourceMappingURL=AbstractArmor.js.map