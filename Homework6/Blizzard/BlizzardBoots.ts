import { AbstractBoots } from "../AbstractBoots";

/**
 * 魔獸爭霸靴子
 */
export class BlizzardBoots extends AbstractBoots {

    /**
     * 製造
     */
    make() {
        console.log('**' + this.production + '**');
    }
}