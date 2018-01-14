"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NcccCreditCard_1 = require("./NcccCreditCard");
/**
 * 信用卡聯合中心授權工廠
 */
var NcccCardFactory = /** @class */ (function () {
    function NcccCardFactory() {
    }
    /**
     * 建立信用卡聯合中心授權物件
     */
    NcccCardFactory.prototype.create = function () {
        return new NcccCreditCard_1.NcccCreditCard();
    };
    return NcccCardFactory;
}());
exports.NcccCardFactory = NcccCardFactory;
//# sourceMappingURL=NcccCardFactory.js.map