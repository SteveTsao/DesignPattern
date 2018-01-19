"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CathayCardFactory_1 = require("./CathayCardFactory");
var CtbcCardFactory_1 = require("./CtbcCardFactory");
var NcccCardFactory_1 = require("./NcccCardFactory");
/**
 * 信用卡授權介面工廠
 */
var CardFactory = /** @class */ (function () {
    function CardFactory() {
    }
    /**
     * 回傳信用卡授權物件
     * @param factoryClass 信用卡授權閘道
     */
    CardFactory.createFactory = function (factoryClass) {
        for (var i = 0; i < this.factories.length; i++) {
            var creditCard = this.factories[i].create();
            if (creditCard.constructor['name'] === factoryClass) {
                return creditCard;
            }
        }
        throw new Error('factory no exists');
    };
    /**
     * 信用卡授權介面集合
     */
    CardFactory.factories = [new CathayCardFactory_1.CathayCardFactory(), new CtbcCardFactory_1.CtbcCardFactory(), new NcccCardFactory_1.NcccCardFactory()];
    return CardFactory;
}());
exports.CardFactory = CardFactory;
//# sourceMappingURL=CardFactory.js.map