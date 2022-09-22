function subsetA(arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  //   console.log("arr = ", arr);
  let arrA = [];
  let arrB = [];
  let sumA = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    sumA += arr[i];
    arrA.unshift(arr[i]);
    // console.log("sum A, ", sumA);
    let sumB = 0;
    for (let j = 0; j < i; j++) {
      sumB += arr[j];
      // arrB.push(arr[j]);
      //   console.log("sumb, ", sumB);
    }
    if (sumA > sumB) return arrA;
  }
}

// console.log(subsetA([1, 2, 3, 4, 5]));
console.log(
  subsetA([20, 2, 3, 4, 4, 5, 9, 7, 8, 6, 10, 4, 5, 10, 10, 8, 4, 6, 4, 10, 1])
);
