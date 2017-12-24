"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 訂閱者抽象類別
 */
var AbstractSubscriber = /** @class */ (function () {
    /**
     * 建構子
     * @param method
     */
    function AbstractSubscriber(method) {
        this._method = method;
    }
    /**
     * 通知訊息
     * @param message 訊息
     */
    AbstractSubscriber.prototype.notify = function (message) {
        this[this._method](message);
    };
    return AbstractSubscriber;
}());
exports.AbstractSubscriber = AbstractSubscriber;
//# sourceMappingURL=AbstractSubscriber.js.map