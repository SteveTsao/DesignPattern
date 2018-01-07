"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Director_1 = require("./Director");
var AmdBuilder_1 = require("./AmdBuilder");
var IntelBuilder_1 = require("./IntelBuilder");
/**
 * 組 AMD 電腦
 */
console.log(new Director_1.Director(new AmdBuilder_1.AmdBuilder()).BuilderComputer('1001X06XDTL 1TB', 'DDR3 32G(8G*4)', 'GTXTITANZ-12GD5'));
/**
 * 組 INTEL 電腦
 */
console.log(new Director_1.Director(new IntelBuilder_1.IntelBuilder()).BuilderComputer('1001X06XDTL 1TB', 'DDR3 32G(8G*4)', 'GTXTITANZ-12GD5'));
//# sourceMappingURL=Main.js.map