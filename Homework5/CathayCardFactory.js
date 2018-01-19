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
var AbstractCardFactory_1 = require("./AbstractCardFactory");
var CathayCreditCard_1 = require("./CathayCreditCard");
/**
 * 國泰世華信用卡授權工廠
 */
var CathayCardFactory = /** @class */ (function (_super) {
    __extends(CathayCardFactory, _super);
    function CathayCardFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 建立國泰世華信用卡授權物件
     */
    CathayCardFactory.prototype.create = function () {
        return new CathayCreditCard_1.CathayCreditCard();
    };
    return CathayCardFactory;
}(AbstractCardFactory_1.AbstractCardFactory));
exports.CathayCardFactory = CathayCardFactory;
//# sourceMappingURL=CathayCardFactory.js.map