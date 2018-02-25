/**
 * 檢核身分證格式
 * @param idno 身分證號
 */
export function FormatChecker(idno: string): boolean {
    return /^[a-zA-Z][12][0-9]{8}$/.test(idno);
}