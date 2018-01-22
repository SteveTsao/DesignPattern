import { AbstractArms } from "../AbstractArms";

/**
 * 寶可夢武器
 */
export class PokemonArms extends AbstractArms {

    /**
     * 製造
     */
    make() {
        console.log('@@' + this.production + '@@');
    }
}