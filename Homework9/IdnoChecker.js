"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormatChecker_1 = require("./FormatChecker");
var FormulaChecker_1 = require("./FormulaChecker");
/**
 * 身分證檢核
 */
var IdnoChecker = /** @class */ (function () {
    function IdnoChecker() {
        this.checkers = [FormatChecker_1.FormatChecker, FormulaChecker_1.FormulaChecker];
    }
    IdnoChecker.prototype.check = function (idno) {
        return this.checkers.every(function (checker) { return checker(idno); });
    };
    return IdnoChecker;
}());
exports.IdnoChecker = IdnoChecker;
//# sourceMappingURL=IdnoChecker.js.map