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
 * 頭盔抽象類別
 */
var AbstractHelmet = /** @class */ (function (_super) {
    __extends(AbstractHelmet, _super);
    /**
     * 建構子
     * @param prod 頭盔
     */
    function AbstractHelmet(prod) {
        return _super.call(this, '頭盔=' + prod) || this;
    }
    return AbstractHelmet;
}(AbstractProduction_1.AbstractProduction));
exports.AbstractHelmet = AbstractHelmet;
//# sourceMappingURL=AbstractHelmet.js.map