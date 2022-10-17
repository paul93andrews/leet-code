function intToRoman (number: number): string {
    const numberPlaces = [...number.toString()];
    let numeral = "";

    console.log(numberPlaces, "these are numberPlaces")
    console.log(numberPlaces.length, "this is numberPlaces.length");

    for (let i = numberPlaces.length - 1; i >= 0; i--) {
        console.log(i, numeral, "this is i")
        if (i === numberPlaces.length - 1) {
            numeral = getOnesValue(parseInt(numberPlaces[i])) + numeral;
        
            continue;
        }

        if (i === numberPlaces.length - 2) {
            numeral = getTensValue(parseInt(numberPlaces[i])) + numeral;
            
            continue;
        }
        
        if (i === numberPlaces.length - 3) {
            numeral = getHundredsValue(parseInt(numberPlaces[i])) + numeral;

            continue;
        }

        numeral = getThousandsValue(parseInt(numberPlaces[i])) + numeral;
    }

    return numeral;
}

function getThousandsValue(number: number): string {
    let thousandsValue = "";

    for (let i = 1; i <= number; i++) {
        thousandsValue = thousandsValue + "M"
    }

    return thousandsValue;
}

function getHundredsValue(number: number): string {
    let hundredsValue = "";

    if (number === 9) {
        return "CM";
    }

    if (number === 4) {
        return "CD";
    }

    for (let i = 1, len = number; i <= len; i++) {
        if (i === 5) {
            hundredsValue = "D";

            continue;
        }

        hundredsValue = hundredsValue + "C"
    }

    return hundredsValue;
}

function getTensValue(number: number): string {
    let tensValue = "";

    if (number === 9) {
        return "XC";
    }

    if (number === 4) {
        return "XL";
    }

    for (let i = 1, len = number; i <= len; i++) {
        if (i === 5) {
            tensValue = "L";

            continue;
        }

        tensValue = tensValue + "X"
    }

    return tensValue;
}

function getOnesValue(number: number): string {
    let onesValue = "";

    if (number === 9) {
        return "IX";
    }

    if (number === 4) {
        return "IV";
    }

    for (let i = 1, len = number; i <= len; i++) {
        if (i === 5) {
            onesValue = "V";

            continue;
        }

        onesValue = onesValue + "I"
    }

    return onesValue;
}