function findRotationCount(arr, low = 0, high = arr.length - 1) {
    let leftIndex = low
    let rightIndex = high
    while (leftIndex <= rightIndex){
        let middleIndex = (low + high)/ 2;
        if (arr[middleIndex - 1] > arr[middleIndex]) {
            return middleIndex
        }
        else if (arr[middleIndex + 1] > arr[middleIndex]) {
            leftIndex = low + 1;
            rightIndex = right - 1;
        }
    }
    return -1
}

module.exports = findRotationCount