"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardFactory_1 = require("./CardFactory");
/**
 * 國泰世華信用卡授權
 */
var cathayCard = CardFactory_1.CardFactory.createFactory('CathayCreditCard');
console.log(cathayCard.auth());
/**
 * 中國信託信用卡授權
 */
var CtbcCard = CardFactory_1.CardFactory.createFactory('CtbcCreditCard');
console.log(CtbcCard.auth());
/**
 * 信用卡聯合中心授權
 */
var NcccCard = CardFactory_1.CardFactory.createFactory('NcccCreditCard');
console.log(NcccCard.auth());
//# sourceMappingURL=Main.js.map