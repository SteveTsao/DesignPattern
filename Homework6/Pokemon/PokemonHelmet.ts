import { AbstractHelmet } from "../AbstractHelmet";

/**
 * 寶可夢頭盔
 */
export class PokemonHelmet extends AbstractHelmet {

    /**
     * 製造
     */
    make() {
        console.log('@@' + this.production + '@@');
    }
}