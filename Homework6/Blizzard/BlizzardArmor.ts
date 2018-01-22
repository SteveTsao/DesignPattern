import { AbstractArmor } from "../AbstractArmor";

/**
 * 魔獸爭霸盔甲
 */
export class BlizzardArmor extends AbstractArmor {

    /**
     * 製造
     */
    make() {
        console.log('**' + this.production + '**');
    }
}