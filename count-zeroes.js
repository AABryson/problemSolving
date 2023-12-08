//instructions at bottom
function countZeroes(arr) {
    //only need to pass in array since default values for low and high
    let firstIndexofZero = findFirst(arr);
    if (firstIndexofZero = -1) {
        return 0;
    }
//they have this; I didn't realize answer was for number of zeros in array
    return arr.length - firstZero
}


//perform binary search to find index of first occurence of zero
function findFirst(arr, low = 0, high = arr.length-1) {
    if (high >= low) {
//get middle index between low and high;
        let middleIndex = math.floor(low + high)/2
//if the value at the middle index is 0 and it is either the first index in the array or the number immediately to the left is 1, then it is the first occurence of zero in the array.
        if ((arr[middleIndex] === 0) && ((middleIndex === 0 || middleIndex-1 === 1))) {
            return middleIndex
        } else if (arr[middleIndex] === 1)  {
            return findFirst(arr, mid + 1, high)
        } else {
//theirs doesn't have else; just have 'return' underneath bracket;
            return findFirst(arr, low, mid - 1)
        }
    }
    return -1;
    
}
module.exports = countZeroes

// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0