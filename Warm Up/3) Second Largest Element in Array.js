function findSecondLargestElement(arr) {
    let i = 0, max = -Infinity, secondMax = -Infinity;
    while (i < arr.length) {
        if (arr[i] > max) {
            secondMax = max
            max = arr[i]
        }
        else if (arr[i] < max && arr[i] > secondMax && arr[i] !== secondMax) {
            secondMax = arr[i]
        }
        i++
    }
    return secondMax
}

let arr = [5, 9, 7, 1, 2, 4, 3]
let result = findSecondLargestElement(arr)
console.log(result)