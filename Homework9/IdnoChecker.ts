import { CheckerInterface } from "./CheckerInterface";
import { FormatChecker } from "./FormatChecker";
import { FormulaChecker } from "./FormulaChecker";

/**
 * 身分證檢核
 */
export class IdnoChecker {

    private checkers: CheckerInterface[];

    constructor() {
        this.checkers = [FormatChecker, FormulaChecker];
    }

    check(idno: string): boolean {
        return this.checkers.every(checker => checker(idno));
    }
}