"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCosplayFactory_1 = require("./AbstractCosplayFactory");
/**
 * Cosplay 服裝
 * @param prod 人物造型工廠
 */
function cosplay(prod) {
    // 帽子, 頭盔, 盔甲, 靴子, 武器
    var arr = [prod.makeHat(), prod.makeHelmet(), prod.makeArmor(), prod.makeBoots(), prod.makeArms()];
    arr.forEach(function (item) {
        item.make();
    });
}
// 魔獸爭霸
try {
    cosplay(AbstractCosplayFactory_1.AbstractCosplayFactory.createCosplay('BlizzardCosplayFactory'));
}
catch (e) {
    console.log(e);
}
// 寶可夢
try {
    cosplay(AbstractCosplayFactory_1.AbstractCosplayFactory.createCosplay('PokemonCosplayFactory'));
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=Main.js.map