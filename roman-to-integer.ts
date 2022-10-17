/** Runtime: 131 ms, faster than 96.10 % of TypeScript online submissions for Roman to Integer.
Memory Usage: 47.2 MB, less than 94.57 % of TypeScript online submissions for Roman to Integer.
**/

const numeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanToInt(s: string): number {
    let integerValue = 0;
    let skipNextNumeral = false;

    for (let i = 0, len = s.length; i < len; i++) {
        if (skipNextNumeral) {
            skipNextNumeral = false;

            continue;
        }

        const numeral = s[i];
        const nextNumeral = s[i + 1];
        const integer = numeralMap[numeral];

        if (numeral === "I") {
            const iValue = getIValue(nextNumeral, integer);

            skipNextNumeral = iValue !== integer;
            integerValue = integerValue + iValue;

            continue;
        }

        if (numeral === "X") {
            const xValue = getXValue(nextNumeral, integer);

            skipNextNumeral = xValue !== integer;
            integerValue = integerValue + xValue;

            continue;
        }

        if (numeral === "C") {
            const cValue = getCValue(nextNumeral, integer);

            skipNextNumeral = cValue !== integer;
            integerValue = integerValue + cValue

            continue;
        }

        integerValue = integerValue + integer
    }

    return integerValue;
};

function getIValue(nextNumeral: string, value: number): number {
    if (nextNumeral === "V") {
        return 4;
    }

    if (nextNumeral === "X") {
        return 9;
    }

    return value;
}

function getXValue(nextNumeral: string, value: number): number {
    if (nextNumeral === "L") {
        return 40;
    }

    if (nextNumeral === "C") {
        return 90;
    }

    return value;
}

function getCValue(nextNumeral: string, value: number): number {
    if (nextNumeral === "D") {
        return 400;
    }

    if (nextNumeral === "M") {
        return 900;
    }

    return value;
}