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
var AbstractClockDisplay_1 = require("./AbstractClockDisplay");
/**
 * 電子鐘物件
 */
var DigitalClock = /** @class */ (function (_super) {
    __extends(DigitalClock, _super);
    function DigitalClock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 取得字尾長度字串
     * @param str 字串
     * @param len 長度
     * @returns 字尾長度字串
     */
    DigitalClock.prototype.right = function (str, len) {
        return str.substring(str.length - len);
    };
    /**
     * 顯示時間
     * @param hours 時
     * @param minutes 分
     * @param seconds 秒
     */
    DigitalClock.prototype.update = function (hours, minutes, seconds) {
        console.log(this.right('00' + hours, 2) + ':' + this.right('00' + minutes, 2) + ':' + this.right('00' + seconds, 2));
    };
    return DigitalClock;
}(AbstractClockDisplay_1.AbstractClockDisplay));
exports.DigitalClock = DigitalClock;
//# sourceMappingURL=DigitalClock.js.map