"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomPrint_1 = require("./RandomPrint");
var DocumentTxt_1 = require("./DocumentTxt");
var printDoc = new RandomPrint_1.RandomPrint(new DocumentTxt_1.DocumentTxt());
printDoc.open('myfile.txt');
printDoc.display(); // 隨機列印
printDoc.close();
//# sourceMappingURL=Main.js.map