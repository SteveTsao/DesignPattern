import { AbstractHat } from "../AbstractHat";

/**
 * 魔獸爭霸帽子
 */
export class BlizzardHat extends AbstractHat {

    /**
     * 製造
     */
    make() {
        console.log('**' + this.production + '**');
    }
}