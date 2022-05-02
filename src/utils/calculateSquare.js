import { square } from 'mathjs';

export function calculateSquare() {
    this.expression = "sqr" + "(" + this.firstOperand + ")";
    this.firstOperand = square(this.firstOperand).toString();
    this.secondOperand = "";
    this.operator = "";
}