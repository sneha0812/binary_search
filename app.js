function binarySearch(array, target, start, end) {

    if (start > end)
        return NOT_FOUND;
    if (array[start] === target)
        return start;
    if (array[end] === target)
        return end;
    let middle = (start + end) / 2
    if (array[middle] > target)
        return binarySearch(array, target, start + 1, middle);
    if (array[middle] < target)
        return binarySearch(array, target, middle, end - 1);
    return middle;
}
console.log(Math.round(binarySearch([1, 2, 3, 4, 5, 7, 8], 5, 0, 6)));

