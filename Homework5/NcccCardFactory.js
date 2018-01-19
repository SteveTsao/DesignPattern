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
var NcccCreditCard_1 = require("./NcccCreditCard");
/**
 * 信用卡聯合中心授權工廠
 */
var NcccCardFactory = /** @class */ (function (_super) {
    __extends(NcccCardFactory, _super);
    function NcccCardFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 建立信用卡聯合中心授權物件
     */
    NcccCardFactory.prototype.create = function () {
        return new NcccCreditCard_1.NcccCreditCard();
    };
    return NcccCardFactory;
}(AbstractCardFactory_1.AbstractCardFactory));
exports.NcccCardFactory = NcccCardFactory;
//# sourceMappingURL=NcccCardFactory.js.map