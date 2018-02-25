"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 檢核身分證號公式
 * @param idno 身分證號
 */
function FormulaChecker(idno) {
    var eng = { 'A': '10', 'B': '11', 'C': '12', 'D': '13', 'E': '14', 'F': '15', 'G': '16', 'H': '17', 'I': '34', 'J': '18', 'K': '19', 'L': '20', 'M': '21', 'N': '22', 'O': '35', 'P': '23', 'Q': '24', 'R': '25', 'S': '26', 'T': '27', 'U': '28', 'V': '29', 'W': '32', 'X': '30', 'Y': '31', 'Z': '33' };
    var cnt = [0, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 9];
    idno += eng[idno.charAt(0).toLocaleUpperCase()];
    var sum = 0;
    for (var i = 1; i < idno.length && i <= cnt.length; i++) {
        sum += Number(idno.charAt(i)) * cnt[i];
    }
    return (sum % 10 == 0);
}
exports.FormulaChecker = FormulaChecker;
//# sourceMappingURL=FormulaChecker.js.map