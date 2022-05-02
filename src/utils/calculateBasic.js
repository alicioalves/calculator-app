import { evaluate } from 'mathjs';

export function calculateBasic() {
  const { firstOperand, secondOperand, operator } = this;
  if (firstOperand) {
    this.firstOperand = evaluate(
      firstOperand + operator + secondOperand
    ).toString();
    this.expression =
      firstOperand + operator + secondOperand.toString() + "=";
    this.secondOperand = "";
    this.operator = "";
  }
  return;
}