import { AbstractArms } from "../AbstractArms";

/**
 * 魔獸爭霸武器
 */
export class BlizzardArms extends AbstractArms {

    /**
     * 製造
     */
    make() {
        console.log('**' + this.production + '**');
    }
}