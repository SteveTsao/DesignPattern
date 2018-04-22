/**
 * 活動類別
 */
export class ActivityService {

    /** 起始日 */
    private sDate = new Date('2018/04/15');

    /** 結束日 */
    private eDate = new Date('2018/05/15');

    /**
     * 是否在期間內
     */
    public isActivate(): boolean {

        let now = new Date().getTime();

        return now >= this.sDate.getTime() && now <= this.eDate.getTime();
    }
}