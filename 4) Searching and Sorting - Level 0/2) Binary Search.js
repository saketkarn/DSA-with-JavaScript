//In binary search, array should always be sorted.

function binarySearch(arr,low,high,target){
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]===target) return mid;
        else if(target>arr[mid]) low=mid+1
        else high=mid-1
    }
    return -1
}
let arr=[1,2,3,4,5],low=0,high=arr.length-1,target=4;
console.log(binarySearch(arr,low,high,target))