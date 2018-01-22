import { AbstractArmor } from "../AbstractArmor";

/**
 * 寶可夢盔甲
 */
export class PokemonArmor extends AbstractArmor {

    /**
     * 製造
     */
    make() {
        console.log('@@' + this.production + '@@');
    }
}