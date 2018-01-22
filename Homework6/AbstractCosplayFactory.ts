import { AbstractHat } from "./AbstractHat";
import { AbstractHelmet } from "./AbstractHelmet";
import { AbstractArmor } from "./AbstractArmor";
import { AbstractBoots } from "./AbstractBoots";
import { AbstractArms } from "./AbstractArms";
import { BlizzardHat } from "./Blizzard/BlizzardHat";
import { BlizzardHelmet } from "./Blizzard/BlizzardHelmet";
import { BlizzardArmor } from "./Blizzard/BlizzardArmor";
import { BlizzardBoots } from "./Blizzard/BlizzardBoots";
import { BlizzardArms } from "./Blizzard/BlizzardArms";
import { PokemonHat } from "./Pokemon/PokemonHat";
import { PokemonHelmet } from "./Pokemon/PokemonHelmet";
import { PokemonArmor } from "./Pokemon/PokemonArmor";
import { PokemonBoots } from "./Pokemon/PokemonBoots";
import { PokemonArms } from "./Pokemon/PokemonArms";

/**
 * Cosplay 角色服裝造型抽象工廠
 */
export abstract class AbstractCosplayFactory {

    /**
     * 取得 Cosplay 角色服裝造型工廠
     * @param factory  造型角色
     */
    static createCosplay(factory: string): AbstractCosplayFactory {

        let obj = eval(factory);

        if (typeof obj === 'function') {
            return new obj();
        }

        throw new Error('Class don\'t exists.');
    }

    /**
     * 製造帽子
     */
    abstract makeHat(): AbstractHat;

    /**
     * 製造頭盔
     */
    abstract makeHelmet(): AbstractHelmet;

    /**
     * 製造盔甲
     */
    abstract makeArmor(): AbstractArmor;

    /**
     * 製造靴子
     */
    abstract makeBoots(): AbstractBoots;

    /**
     * 製造武器
     */
    abstract makeArms(): AbstractArms;
}

/**
 * 魔獸爭霸角色服裝造型抽象工廠
 */
class BlizzardCosplayFactory extends AbstractCosplayFactory {

    /**
     * 製造帽子
     */
    makeHat() {
        return new BlizzardHat('魔獸爭霸');
    }

    /**
     * 製造頭盔
     */
    makeHelmet() {
        return new BlizzardHelmet('魔獸爭霸');
    }

    /**
     * 製造盔甲
     */
    makeArmor() {
        return new BlizzardArmor('魔獸爭霸');
    }

    /**
     * 製造靴子
     */
    makeBoots() {
        return new BlizzardBoots('魔獸爭霸');
    }

    /**
     * 製造武器
     */
    makeArms() {
        return new BlizzardArms('魔獸爭霸');
    }
}

/**
 * 寶可夢角色服裝造型抽象工廠
 */
class PokemonCosplayFactory extends AbstractCosplayFactory {

    /**
     * 製造帽子
     */
    makeHat() {
        return new PokemonHat('寶可夢');
    }

    /**
     * 製造頭盔
     */
    makeHelmet() {
        return new PokemonHelmet('寶可夢');
    }

    /**
     * 製造盔甲
     */
    makeArmor() {
        return new PokemonArmor('寶可夢');
    }

    /**
     * 製造靴子
     */
    makeBoots() {
        return new PokemonBoots('寶可夢');
    }

    /**
     * 製造武器
     */
    makeArms() {
        return new PokemonArms('寶可夢');
    }
}