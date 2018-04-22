"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 活動類別
 */
var ActivityService = /** @class */ (function () {
    function ActivityService() {
        /** 起始日 */
        this.sDate = new Date('2018/04/15');
        /** 結束日 */
        this.eDate = new Date('2018/05/15');
    }
    /**
     * 是否在期間內
     */
    ActivityService.prototype.isActivate = function () {
        var now = new Date().getTime();
        return now >= this.sDate.getTime() && now <= this.eDate.getTime();
    };
    return ActivityService;
}());
exports.ActivityService = ActivityService;
//# sourceMappingURL=ActivityService.js.map