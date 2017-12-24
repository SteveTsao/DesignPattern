"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 時鐘類別
 */
var Clock = /** @class */ (function () {
    /**
     * 建構子: 每秒執行 onTick
     */
    function Clock(proxyObservable) {
        var _this = this;
        this._proxyObservable = proxyObservable;
        setInterval(function () {
            _this._proxyObservable.publish('onTick', _this.onTick());
        }, 1000);
    }
    /**
     * 取得時間
     */
    Clock.prototype.onTick = function () {
        var now = new Date();
        return [now.getHours(), now.getMinutes(), now.getSeconds()];
    };
    return Clock;
}());
exports.Clock = Clock;
//# sourceMappingURL=Clock.js.map