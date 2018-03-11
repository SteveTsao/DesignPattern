import { StateInterface } from "./StateInterface";

/**
 * 紅綠燈
 */
export class TrafficLightContext {

    /**
     * 燈號
     */
    private state: StateInterface;

    /**
     * 初始設定
     * @param light 起始燈號
     */
    constructor(light: StateInterface) {
        this.state = light;
    }

    /**
     * 取得下個燈號
     */
    request(): StateInterface {
        this.state = this.state();
        return this.state;
    }
}