import { Director } from "./Director";
import { AmdBuilder } from "./AmdBuilder";
import { IntelBuilder } from "./IntelBuilder";

/**
 * 組 AMD 電腦
 */
console.log(new Director(new AmdBuilder()).BuilderComputer('1001X06XDTL 1TB', 'DDR3 32G(8G*4)', 'GTXTITANZ-12GD5'));

/**
 * 組 INTEL 電腦
 */
console.log(new Director(new IntelBuilder()).BuilderComputer('1001X06XDTL 1TB', 'DDR3 32G(8G*4)', 'GTXTITANZ-12GD5'));
