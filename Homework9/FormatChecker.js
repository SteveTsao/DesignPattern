"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 檢核身分證格式
 * @param idno 身分證號
 */
function FormatChecker(idno) {
    return /^[a-zA-Z][12][0-9]{8}$/.test(idno);
}
exports.FormatChecker = FormatChecker;
//# sourceMappingURL=FormatChecker.js.map