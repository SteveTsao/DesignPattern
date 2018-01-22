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
 * 魔獸爭霸武器
 */
var BlizzardArms = /** @class */ (function (_super) {
    __extends(BlizzardArms, _super);
    function BlizzardArms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 製造
     */
    BlizzardArms.prototype.make = function () {
        console.log('**' + this.production + '**');
    };
    return BlizzardArms;
}(AbstractArms_1.AbstractArms));
exports.BlizzardArms = BlizzardArms;
//# sourceMappingURL=BlizzardArms.js.map