const numeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function intToRoman(number: number): string {
    const numberString = number.toString();
    const numberOfDigits = numberString.length;

    if (numberOfDigits > 3) {
        return getThousandthsNumeral(number);
    }

    return "sumTingWong";
};

function getThousandthsNumeral(number: number): string {
    const numberOfThousands = number / 1000;
    let numeralString = "";

    for (let i = 0, len = numberOfThousands; i < len; i++) {
        numeralString = numeralString + "M";
    }

    if (numberOfThousands % 1 === 0) {
        return numeralString;
    }

    const remainingNumeral = getHundredthsNumeral((numberOfThousands.toFixed(2)));

    return numeralString + remainingNumeral;
}

function getHundredthsNumeral(number: number): string {
    const numberOfHundredths = number * 3;
    let numeralString = "";

    for (let i = 0, len = numberOfHundredths; i < len; i++) {
        numeralString = numeralString + 
    }
}