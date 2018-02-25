import { IdnoChecker } from "./IdnoChecker";

let idnoChecker = new IdnoChecker();

console.log(idnoChecker.check('F203501217')); // 合法 = true
console.log(idnoChecker.check('F203501216')); // 非法 = false
console.log(idnoChecker.check('F203')); // 非法 = false