import { evaluate } from 'mathjs';

export function calculatePercentage() {
    if (this.secondOperand) {
        this.expression =
            this.firstOperand + this.operator + this.secondOperand + "%";
        this.firstOperand = evaluate(
            this.firstOperand + this.operator + this.secondOperand + "%"
        ).toString();
        this.secondOperand = "";
        this.operator = "";
    }
    return;
}