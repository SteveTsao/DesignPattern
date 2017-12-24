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
var AbstractProxy_1 = require("./AbstractProxy");
/**
 * 代理者
 */
var ProxyObservable = /** @class */ (function (_super) {
    __extends(ProxyObservable, _super);
    function ProxyObservable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 主題訂閱者 */
        _this.observers = {};
        return _this;
    }
    /**
     * 註冊
     * @param topic 主題
     * @param observer 訂閱者
     */
    ProxyObservable.prototype.subscribe = function (topic, observer) {
        if (!this.observers.hasOwnProperty(topic)) {
            this.observers[topic] = [];
        }
        this.observers[topic].push(observer);
        return this;
    };
    /**
     * 取消註冊
     * @param topic 主題
     * @param observer 訂閱者
     */
    ProxyObservable.prototype.unsubscribe = function (topic, observer) {
        for (var i = this.observers[topic].length; i >= 0; i++) {
            if (this.observers[topic][i] === observer) {
                delete this.observers[topic][i];
            }
        }
        return this;
    };
    /**
     * 通知
     * @param topic 主體
     * @param message 訊息
     */
    ProxyObservable.prototype.publish = function (topic, message) {
        this.observers[topic].forEach(function (observer) {
            observer.notify(message);
        });
        return this;
    };
    return ProxyObservable;
}(AbstractProxy_1.AbstractProxy));
exports.ProxyObservable = ProxyObservable;
//# sourceMappingURL=ProxyObservable.js.map