import { AbstractBoots } from "../AbstractBoots";

/**
 * 寶可夢靴子
 */
export class PokemonBoots extends AbstractBoots {

    /**
     * 製造
     */
    make() {
        console.log('@@' + this.production + '@@');
    }
}