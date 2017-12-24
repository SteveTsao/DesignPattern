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
var AbstractSubscriber_1 = require("./AbstractSubscriber");
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
     * @param arr
     */
    DigitalClock.prototype.update = function (arr) {
        console.log(this.right('00' + arr[0], 2) + ':' + this.right('00' + arr[1], 2) + ':' + this.right('00' + arr[2], 2));
    };
    return DigitalClock;
}(AbstractSubscriber_1.AbstractSubscriber));
exports.DigitalClock = DigitalClock;
//# sourceMappingURL=DigitalClock.js.map