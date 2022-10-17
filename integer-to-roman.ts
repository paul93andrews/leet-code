/** Runtime: 121 ms, faster than 98.78 % of TypeScript online submissions for Integer to Roman.
Memory Usage: 47.4 MB, less than 95.73 % of TypeScript online submissions for Integer to Roman.
**/

const romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
];

function intToRoman(value: number) {
    if (value === 0) {
        return '';
    }

    for (let i = 0; i < romanMatrix.length; i++) {
        const roundedBaseValue = romanMatrix[i][0] as number;

        if (value < roundedBaseValue) {
            continue;
        }

        return romanMatrix[i][1] + intToRoman(value - roundedBaseValue);
    }
}