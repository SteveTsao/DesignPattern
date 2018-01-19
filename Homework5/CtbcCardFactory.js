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
var CtbcCreditCard_1 = require("./CtbcCreditCard");
/**
 * 中國信託信用卡授權工廠
 */
var CtbcCardFactory = /** @class */ (function (_super) {
    __extends(CtbcCardFactory, _super);
    function CtbcCardFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 建立中國信託信用卡授權物件
     */
    CtbcCardFactory.prototype.create = function () {
        return new CtbcCreditCard_1.CtbcCreditCard();
    };
    return CtbcCardFactory;
}(AbstractCardFactory_1.AbstractCardFactory));
exports.CtbcCardFactory = CtbcCardFactory;
//# sourceMappingURL=CtbcCardFactory.js.map