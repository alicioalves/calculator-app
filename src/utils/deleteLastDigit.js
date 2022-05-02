export function deleteLastDigit() {
    if (this.secondOperand) {
        this.secondOperand = this.secondOperand.slice(0, -1);
        return;
    }
    this.firstOperand = this.firstOperand.slice(0, -1);
}