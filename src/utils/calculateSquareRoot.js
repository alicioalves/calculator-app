import { sqrt } from 'mathjs';

export function calculateSquareRoot() {
    this.expression = "sqrt" + "(" + this.firstOperand + ")";
    this.firstOperand = sqrt(this.firstOperand).toString();
    this.secondOperand = "";
    this.operator = "";
}