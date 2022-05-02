export function updateOperator(op) {
    if (this.operator) {
        this.calculateBasic();
    }
    if (this.firstOperand) {
        this.operator = op;

        this.expression = (this.firstOperand + op).toString();
    }

    return;
}