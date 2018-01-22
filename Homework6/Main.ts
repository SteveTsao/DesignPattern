import { AbstractCosplayFactory } from "./AbstractCosplayFactory";
import { AbstractProduction } from "./AbstractProduction";

/**
 * Cosplay 服裝
 * @param prod 人物造型工廠
 */
function cosplay(prod: AbstractCosplayFactory) {

    // 帽子, 頭盔, 盔甲, 靴子, 武器
    let arr: Array<AbstractProduction> = [prod.makeHat(), prod.makeHelmet(), prod.makeArmor(), prod.makeBoots(), prod.makeArms()];

    arr.forEach((item) => {
        item.make();
    })
}


// 魔獸爭霸
try {
    cosplay(AbstractCosplayFactory.createCosplay('BlizzardCosplayFactory'));
} catch (e) {
    console.log(e);
}

// 寶可夢
try {
    cosplay(AbstractCosplayFactory.createCosplay('PokemonCosplayFactory'));
} catch (e) {
    console.log(e);
}