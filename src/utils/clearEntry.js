export function clearEntry() {
    if (this.secondOperand) {
        this.secondOperand = " ";
        return;
    }
    this.firstOperand = "";
}