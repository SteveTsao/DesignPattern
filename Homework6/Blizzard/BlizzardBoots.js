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
var AbstractBoots_1 = require("../AbstractBoots");
/**
 * 魔獸爭霸靴子
 */
var BlizzardBoots = /** @class */ (function (_super) {
    __extends(BlizzardBoots, _super);
    function BlizzardBoots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 製造
     */
    BlizzardBoots.prototype.make = function () {
        console.log('**' + this.production + '**');
    };
    return BlizzardBoots;
}(AbstractBoots_1.AbstractBoots));
exports.BlizzardBoots = BlizzardBoots;
//# sourceMappingURL=BlizzardBoots.js.map