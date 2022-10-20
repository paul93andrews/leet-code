// this is a good lesson for multi-dimensional comparison
// solution starts at beginning of array and then has two "cursors" that close in from the next index and the end of the array, moving towards each other
// the comparison conditional is checked after each movement of either "cursor"
// therefore, a deep comparison is made between several different combinations of the array's internal values

function threeSum(numbers: number[]): number[][] {
    numbers.sort((a, b) => a - b);
    const triplets: number[][]= [];

    for (let i = 0; i < numbers.length - 2; i++) {
        if (numbers[i] == numbers[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = numbers.length - 1;

        while (left < right) {
            const currentSum = numbers[i] + numbers[left] + numbers[right];

            if (currentSum < 0) {
                left++

                continue;
            }

            if (currentSum > 0) {
                right--

                continue;
            }

            triplets.push([numbers[i], numbers[left], numbers[right]]);

            while (numbers[left] == numbers[left + 1]) left++
            while (numbers[right] == numbers[right - 1]) right-- // making sure our solution set does not contain duplicate triplets

            left++;
            right--;
        }
    }
    
    return triplets
};