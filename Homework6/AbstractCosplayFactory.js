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
var BlizzardHat_1 = require("./Blizzard/BlizzardHat");
var BlizzardHelmet_1 = require("./Blizzard/BlizzardHelmet");
var BlizzardArmor_1 = require("./Blizzard/BlizzardArmor");
var BlizzardBoots_1 = require("./Blizzard/BlizzardBoots");
var BlizzardArms_1 = require("./Blizzard/BlizzardArms");
var PokemonHat_1 = require("./Pokemon/PokemonHat");
var PokemonHelmet_1 = require("./Pokemon/PokemonHelmet");
var PokemonArmor_1 = require("./Pokemon/PokemonArmor");
var PokemonBoots_1 = require("./Pokemon/PokemonBoots");
var PokemonArms_1 = require("./Pokemon/PokemonArms");
/**
 * Cosplay 角色服裝造型抽象工廠
 */
var AbstractCosplayFactory = /** @class */ (function () {
    function AbstractCosplayFactory() {
    }
    /**
     * 取得 Cosplay 角色服裝造型工廠
     * @param factory  造型角色
     */
    AbstractCosplayFactory.createCosplay = function (factory) {
        var obj = eval(factory);
        if (typeof obj === 'function') {
            return new obj();
        }
        throw new Error('Class don\'t exists.');
    };
    return AbstractCosplayFactory;
}());
exports.AbstractCosplayFactory = AbstractCosplayFactory;
/**
 * 魔獸爭霸角色服裝造型抽象工廠
 */
var BlizzardCosplayFactory = /** @class */ (function (_super) {
    __extends(BlizzardCosplayFactory, _super);
    function BlizzardCosplayFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 製造帽子
     */
    BlizzardCosplayFactory.prototype.makeHat = function () {
        return new BlizzardHat_1.BlizzardHat('魔獸爭霸');
    };
    /**
     * 製造頭盔
     */
    BlizzardCosplayFactory.prototype.makeHelmet = function () {
        return new BlizzardHelmet_1.BlizzardHelmet('魔獸爭霸');
    };
    /**
     * 製造盔甲
     */
    BlizzardCosplayFactory.prototype.makeArmor = function () {
        return new BlizzardArmor_1.BlizzardArmor('魔獸爭霸');
    };
    /**
     * 製造靴子
     */
    BlizzardCosplayFactory.prototype.makeBoots = function () {
        return new BlizzardBoots_1.BlizzardBoots('魔獸爭霸');
    };
    /**
     * 製造武器
     */
    BlizzardCosplayFactory.prototype.makeArms = function () {
        return new BlizzardArms_1.BlizzardArms('魔獸爭霸');
    };
    return BlizzardCosplayFactory;
}(AbstractCosplayFactory));
/**
 * 寶可夢角色服裝造型抽象工廠
 */
var PokemonCosplayFactory = /** @class */ (function (_super) {
    __extends(PokemonCosplayFactory, _super);
    function PokemonCosplayFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 製造帽子
     */
    PokemonCosplayFactory.prototype.makeHat = function () {
        return new PokemonHat_1.PokemonHat('寶可夢');
    };
    /**
     * 製造頭盔
     */
    PokemonCosplayFactory.prototype.makeHelmet = function () {
        return new PokemonHelmet_1.PokemonHelmet('寶可夢');
    };
    /**
     * 製造盔甲
     */
    PokemonCosplayFactory.prototype.makeArmor = function () {
        return new PokemonArmor_1.PokemonArmor('寶可夢');
    };
    /**
     * 製造靴子
     */
    PokemonCosplayFactory.prototype.makeBoots = function () {
        return new PokemonBoots_1.PokemonBoots('寶可夢');
    };
    /**
     * 製造武器
     */
    PokemonCosplayFactory.prototype.makeArms = function () {
        return new PokemonArms_1.PokemonArms('寶可夢');
    };
    return PokemonCosplayFactory;
}(AbstractCosplayFactory));
//# sourceMappingURL=AbstractCosplayFactory.js.map