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
var AbstractHat_1 = require("../AbstractHat");
/**
 * 魔獸爭霸帽子
 */
var BlizzardHat = /** @class */ (function (_super) {
    __extends(BlizzardHat, _super);
    function BlizzardHat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 製造
     */
    BlizzardHat.prototype.make = function () {
        console.log('**' + this.production + '**');
    };
    return BlizzardHat;
}(AbstractHat_1.AbstractHat));
exports.BlizzardHat = BlizzardHat;
//# sourceMappingURL=BlizzardHat.js.map