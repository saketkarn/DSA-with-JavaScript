function totalSum(arr, i) {
    if (i === arr.length) return 0;
    return arr[i] + totalSum(arr, i + 1)
}

let arr = [1, 2, 3, 4, 5], i = 0;
console.log(totalSum(arr, i))