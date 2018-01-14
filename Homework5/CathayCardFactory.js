"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CathayCreditCard_1 = require("./CathayCreditCard");
/**
 * 國泰世華信用卡授權工廠
 */
var CathayCardFactory = /** @class */ (function () {
    function CathayCardFactory() {
    }
    /**
     * 建立國泰世華信用卡授權物件
     */
    CathayCardFactory.prototype.create = function () {
        return new CathayCreditCard_1.CathayCreditCard();
    };
    return CathayCardFactory;
}());
exports.CathayCardFactory = CathayCardFactory;
//# sourceMappingURL=CathayCardFactory.js.map