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
var AbstractArms_1 = require("../AbstractArms");
/**
 * 寶可夢武器
 */
var PokemonArms = /** @class */ (function (_super) {
    __extends(PokemonArms, _super);
    function PokemonArms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 製造
     */
    PokemonArms.prototype.make = function () {
        console.log('@@' + this.production + '@@');
    };
    return PokemonArms;
}(AbstractArms_1.AbstractArms));
exports.PokemonArms = PokemonArms;
//# sourceMappingURL=PokemonArms.js.map