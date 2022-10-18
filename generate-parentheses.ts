let finalArray: string[] = [];

function generateParenthesis(number: number) {
    finalArray = [];

    getValues(number, 0, 0, "")

    return finalArray;
}

function getValues(number: number, numberOfOpen: number, numberOfClosed: number, currentString: string) {
    if (numberOfOpen === number && numberOfClosed === number) {
        finalArray.push(currentString);

        return;
    }

    if (numberOfOpen < number) {
        getValues(number, numberOfOpen + 1, numberOfClosed, currentString + "(");
    }

    if (numberOfClosed < numberOfOpen) {
        getValues(number, numberOfOpen, numberOfClosed + 1, currentString + ")");
    }

}
