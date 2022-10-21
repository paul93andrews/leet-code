function maxArea(height: number[]): number {
    let maxContainer = 0;
    let start = 0;
    let end = height.length - 1;

    while (start !== end) {
        if (height[start] < height[end]) {
            maxContainer = getMaxArea(height[start] * Math.abs(start - end), maxContainer);
            start++

            continue;
        } 

        maxContainer = getMaxArea(height[end] * Math.abs(start - end), maxContainer);
        end--;
    }

    return maxContainer
};

function getMaxArea(currentArea: number, previousArea: number): number {
    return currentArea > previousArea ? currentArea : previousArea;
}