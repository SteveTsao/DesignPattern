"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractObservable_1 = require("./AbstractObservable");
/**
 * 時鐘類別
 */
var Clock = /** @class */ (function (_super) {
    __extends(Clock, _super);
    /**
     * 建構子: 每秒執行 onTick
     */
    function Clock() {
        var _this = _super.call(this) || this;
        /** 時 */
        _this._hours = 0;
        /** 分 */
        _this._minutes = 0;
        /** 秒 */
        _this._seconds = 0;
        /** 註冊物件 */
        _this.observers = [];
        setInterval(function () {
            _this.onTick();
        }, 1000);
        return _this;
    }
    /**
     * 取得時間
     */
    Clock.prototype.onTick = function () {
        var now = new Date();
        this._hours = now.getHours();
        this._minutes = now.getMinutes();
        this._seconds = now.getSeconds();
        this.notifyObservers();
    };
    /**
     * 註冊
     * @param observer
     */
    Clock.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    /**
     * 通知
     */
    Clock.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this._hours, _this._minutes, _this._seconds);
        });
    };
    return Clock;
}(AbstractObservable_1.AbstractObservalbe));
exports.Clock = Clock;
//# sourceMappingURL=Clock.js.map