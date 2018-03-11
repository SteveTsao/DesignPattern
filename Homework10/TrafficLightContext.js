"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 紅綠燈
 */
var TrafficLightContext = /** @class */ (function () {
    /**
     * 初始設定
     * @param light 起始燈號
     */
    function TrafficLightContext(light) {
        this.state = light;
    }
    /**
     * 取得下個燈號
     */
    TrafficLightContext.prototype.request = function () {
        this.state = this.state();
        return this.state;
    };
    return TrafficLightContext;
}());
exports.TrafficLightContext = TrafficLightContext;
//# sourceMappingURL=TrafficLightContext.js.map