"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MemberService = /** @class */ (function () {
    function MemberService(member) {
        this.member = '';
        this.member = member;
    }
    MemberService.prototype.isMember = function () {
        return this.member === 'member';
    };
    MemberService.prototype.isMemberTwoYear = function () {
        return this.member === 'twoYear';
    };
    return MemberService;
}());
exports.MemberService = MemberService;
//# sourceMappingURL=MemberService.js.map