import { AbstractHat } from "../AbstractHat";

/**
 * 寶可夢帽子
 */
export class PokemonHat extends AbstractHat {

    /**
     * 製造
     */
    make() {
        console.log('@@' + this.production + '@@');
    }
}