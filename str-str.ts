function strStr(haystack: string, needle: string): number {
    let indexNumber = -1;

    if (needle.length > haystack.length) {
        return indexNumber;
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, needle.length + i) !== needle) {
            continue;
        }

        indexNumber = i;

        break;
    }

    return indexNumber;
};