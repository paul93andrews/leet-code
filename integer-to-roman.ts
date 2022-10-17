const numeralValues = {
    "4": {
        numeral: "M",
        denominator: 1000
    },
    "3": {
        numeral: "C",
        base5: "D",
        base9: "CM",
        base4: "CD",
        denominator: 100
    },
    "2": {
        numeral: "X",
        base5: "L",
        base9: "XC",
        base4: "XL",
        denominator: 10
    },
    "1": {
        numeral: "I",
        base5: "V",
        base9: "IX",
        base4: "IV",
        denominator: 1
    }
}

function intToRoman(number: number): string {
    return recursiveLoop(number, number.toString().length, "");
}

function recursiveLoop(number: number, numberOfDigits: number, initialNumeral: string): string {
    if (numberOfDigits === 0) {
        return initialNumeral;
    }

    const values = numeralValues[numberOfDigits];
    const numberOverBase = number / values.denominator;
    const numberOfDecimalPoints = numberOfDigits - 1;
    const decimalValue = +((numberOverBase % 1).toFixed(numberOfDecimalPoints));
    let numeralString = initialNumeral;
    let value = "";

    if (Math.floor(numberOverBase) === 9) {
        numeralString = numeralString + values.base9;

        return recursiveLoop(decimalValue * values.denominator, numberOfDecimalPoints, numeralString);
    }

    if (Math.floor(numberOverBase) === 4) {
        numeralString = numeralString + values.base4;

        return recursiveLoop(decimalValue * values.denominator, numberOfDecimalPoints, numeralString);
    }

    for (let i = 1, len = Math.floor(numberOverBase); i <= len; i++) {
        if (i === 5) {
            value = values.base5;

            continue;
        }

        value = value + values.numeral;
    }

    if (decimalValue === 0) {
        return numeralString + value;
    }

    return recursiveLoop(decimalValue * values.denominator, numberOfDecimalPoints, numeralString + value);
}