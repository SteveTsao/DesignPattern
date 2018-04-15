export class MemberService {

    private member: string = '';

    public constructor(member: string) {

        this.member = member;
    }

    public isMember() {
        return this.member === 'member';
    }

    public isMemberTwoYear() {
        return this.member === 'twoYear';
    }
}