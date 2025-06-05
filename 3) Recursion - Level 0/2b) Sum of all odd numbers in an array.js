function sumOfOddNumbers(i) {
    if (i < 0) return 0;
    else if (arr[i] % 2 === 0) return sumOfOddNumbers(i - 1)
    else
        return arr[i] + sumOfOddNumbers(i - 1)
}

let arr = [1, 2, 3, 4, 5], i = arr.length - 1;
console.log(sumOfOddNumbers(i))