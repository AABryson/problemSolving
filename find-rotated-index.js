//instructions at bottom
function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr)
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]){
        return binarySearch(array, num, 0, pivot - 1);
    } else {
        return binarySearch(array, num, pivot, array.length - 1);
    }
}
    // } else if (arr[middleIndex] > arr[arr.legnth - 1]) {
    //     when_on_left_side(arr, num, low, high = middleIndex - 1)
    // } else {
    //     when_on_right_side(arr, num, low=middleIndex = 1, high)
    // }
    // if (num < arr[0]){
    //     low = middleIndex + 1;
    //     high = arr.length - 1;
    // }

function binarySearch(arr, num, start, end) {
    if (arr.length === 0) {
        return -1;
    }
    if (num < array[start] || num > array[end]){
        return -1;
    }
    while (start <= end) {
      let middleIndex = Math.floor((start + end) / 2);
      if (array[middleIndex] === num) {
        return middleIndex;
      } else if (num < arr[middleIndex]) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }
    }
    return -1;
  }
function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let low = 0;
    let high = arr.length-1
    while (low <= high) {
        let middleIndex = (low + high) / 2
        if (middleIndex > middleIndex + 1){
            return middleIndex + 1
        } else if (arr[low] <= arr[middleIndex]) {
            start = mid + 1
        } else {
                end = mid - 1
        }
    }
}
// function when_on_left_side(arr, num, low, high=0) {
//     let leftIndex = low;
//     let rightIndex =  high;
//     while (leftIndex < rightIndex) {
//         let middleIndex = Math.floor(low + high) / 2
//         if (num < arr[middleIndex]) {
//             rightIndex = high - 1;
//         } else if (num > arr[middleIndex]) {
//             leftIndex = low + 1
//         } else {
//             return middleIndex
//         }
//     }    
//     return -1
// }



// function when_on_right_side(arr, num, low=0, high) {
//     let leftIndex = low;
//     let rightIndex = high;
//     while (leftIndex < rightIndex) {
//         let middleIndex = Math.floor(low + high) / 2;
//         if (num < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else if (num > arr[middleIndex]) {
//             leftIndex = middleIndex + 1;
//         } else {
//             return middleIndex
//         }
//     }
    
//     return - 1
// }
    
module.exports = findRotatedIndex

// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1