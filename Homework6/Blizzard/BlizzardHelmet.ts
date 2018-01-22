import { AbstractHelmet } from "../AbstractHelmet";

/**
 * 魔獸爭霸頭盔
 */
export class BlizzardHelmet extends AbstractHelmet {

    /**
     * 製造
     */
    make() {
        console.log('**' + this.production + '**');
    }
}