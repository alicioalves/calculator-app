export function calculateFraction() {
    if (this.secondOperand) {
        this.expression = "1 / " + this.secondOperand;
        this.secondOperand = (1 / parseInt(this.secondOperand)).toString();
        return;
    }
    this.expression = "1 / " + this.firstOperand;
    this.firstOperand = (1 / parseInt(this.firstOperand)).toString();
}