function findFloor(arr, x, low = 0, high = arr.length-1) {
    let leftIndex = low;
    let rightIndex = high;
    let middleIndex = (leftIndex + rightIndex) / 2
    while (leftIndex < rightIndex) {
        if (arr[middleIndex] === x) {
            return middleIndex;
        }
        if ((arr[middleIndex]) < x ) {
            leftIndex = middleIndex + 1; 
        } else if (arr[middleIndex] > x) {
            rightIndex = middleIndex - 1;
        }

    }
}
module.exports = findFloor