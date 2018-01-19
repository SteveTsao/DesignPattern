import { CardFactory } from "./CardFactory";

/**
 * 國泰世華信用卡授權
 */
let cathayCard = CardFactory.createFactory('CathayCreditCard');

console.log(cathayCard.auth());

/**
 * 中國信託信用卡授權
 */

let CtbcCard = CardFactory.createFactory('CtbcCreditCard');

console.log(CtbcCard.auth());

/**
 * 信用卡聯合中心授權
 */
let NcccCard = CardFactory.createFactory('NcccCreditCard');

console.log(NcccCard.auth());