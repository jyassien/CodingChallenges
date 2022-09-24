/**
 * Given five positive integers, find the minimum and maximum 
 * values that can be calculated by summing exactly four of the 
 * five integers. Then print the respective minimum and maximum 
 * values as a single line of two space-separated long integers.
 */

 function miniMaxSum(arr) {
    // Write your code here
    let min = arr[0];
    let max = arr[0];
    
    let minSum = 0;
    let maxSum = 0;
    let totSum = 0;
    for(let i =0; i < arr.length; i++){
        if(min > arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
        totSum += arr[i]
    }
    minSum = totSum - max;
    maxSum = totSum - min;
    console.log(minSum, maxSum)

}

miniMaxSum([1,2,13,4,5])