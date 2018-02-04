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
var AbstractDocument_1 = require("./AbstractDocument");
var fs = require("fs");
/**
 * 實作文字檔案
 */
var DocumentTxt = /** @class */ (function (_super) {
    __extends(DocumentTxt, _super);
    function DocumentTxt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 是否開啟檔案
         */
        _this.path = '';
        /**
         * 檔案內容
         */
        _this.txt = '';
        return _this;
    }
    /**
     * 開啟檔案
     */
    DocumentTxt.prototype.open = function (str) {
        if (this.path !== '') {
            throw new Error('檔案已開啟');
        }
        this.txt = '';
        this.path = str;
    };
    /**
     * 關閉檔案
     */
    DocumentTxt.prototype.close = function () {
        if (this.path === '') {
            throw new Error('檔案未開啟');
        }
        fs.writeFile(this.path, this.txt, function (err) {
            if (err)
                throw err;
        });
        this.path = '';
    };
    /**
     * 寫入檔案
     * @param str 檔案內容
     */
    DocumentTxt.prototype.print = function (str) {
        this.txt += str + '\n';
    };
    return DocumentTxt;
}(AbstractDocument_1.AbstractDocument));
exports.DocumentTxt = DocumentTxt;
//# sourceMappingURL=DocumentTxt.js.map