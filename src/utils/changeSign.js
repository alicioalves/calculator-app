export function changeSign() {
    if (this.secondOperand) {
        this.secondOperand = (parseInt(this.secondOperand) * -1).toString();
        return;
    }
    this.firstOperand = (parseInt(this.firstOperand) * -1).toString();
}