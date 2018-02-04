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
var AbstractPrint_1 = require("./AbstractPrint");
/**
 * 文件隨機列印
 */
var RandomPrint = /** @class */ (function (_super) {
    __extends(RandomPrint, _super);
    function RandomPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 開啟
     */
    RandomPrint.prototype.open = function (str) {
        this.doc.open(str);
    };
    /**
     * 關閉
     */
    RandomPrint.prototype.close = function () {
        this.doc.close();
    };
    /**
     * 列印
     * @param str 內容
     */
    RandomPrint.prototype.print = function (str) {
        this.doc.print(str);
    };
    /**
     * 隨機列印
     */
    RandomPrint.prototype.display = function () {
        var n = Math.floor(Math.random() * 9);
        for (var i = 0; i <= n; i++) {
            this.print('line: ' + i);
        }
    };
    return RandomPrint;
}(AbstractPrint_1.AbstractPrint));
exports.RandomPrint = RandomPrint;
//# sourceMappingURL=RandomPrint.js.map