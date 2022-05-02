export function appendCharacter(char) {
    let currentOperand = this.operator ? "secondOperand" : "firstOperand";
    if (char === ".") {
        console.log(true);
        if (!this.firstOperand.includes(".")) {
            this[currentOperand] += char;
            console.log(false);
        }
        return;
    }
    this[currentOperand] += char;
}