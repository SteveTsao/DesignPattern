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
var AbstractArmor_1 = require("../AbstractArmor");
/**
 * 魔獸爭霸盔甲
 */
var BlizzardArmor = /** @class */ (function (_super) {
    __extends(BlizzardArmor, _super);
    function BlizzardArmor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 製造
     */
    BlizzardArmor.prototype.make = function () {
        console.log('**' + this.production + '**');
    };
    return BlizzardArmor;
}(AbstractArmor_1.AbstractArmor));
exports.BlizzardArmor = BlizzardArmor;
//# sourceMappingURL=BlizzardArmor.js.map