"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdnoChecker_1 = require("./IdnoChecker");
var idnoChecker = new IdnoChecker_1.IdnoChecker();
console.log(idnoChecker.check('F203501217')); // 合法 = true
console.log(idnoChecker.check('F203501216')); // 非法 = false
console.log(idnoChecker.check('F203')); // 非法 = false
//# sourceMappingURL=Main.js.map