function sortAndMiddle(arr) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length + 1; i++) {
      count++;
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  let midIndex = Math.trunc(arr.length / 2);
  midIndex = midIndex < arr.length / 2 ? midIndex + 1 : midIndex;
  let medianValue =
    arr.length % 2 == 1
      ? arr[midIndex - 1]
      : (arr[midIndex] + arr[midIndex + 1]) / 2;
  console.log(" Arr Length: ", arr.length);
  console.log(" Mid Index: ", midIndex);
  console.log(" Sorted Arr: ", arr);
  console.log(" Mid Element: ", arr[midIndex - 1]);
  console.log(" Median Value: ", medianValue);
  console.log(" Number of iteration: ", count);
}

let arr = [5, 23, 2, 4, 6, 1, 67, 3, 3, 9, 0, -55, 8, 8];
sortAndMiddle(arr);
//////////// Output //////
// Arr Length:  14
//  Mid Index:  7
//  Sorted Arr:  [-55,  0, 1, 2, 3, 3,4,  5, 6, 8, 8, 9, 23, 67]
//  Mid Element:  4
//  Median Value:  5.5
//  Number of iteration:  210

function optimizedSorting(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log("Sorted Array: ", arr);
  console.log("Number of Iteration: ", count);
  //   let midIndex = Math.trunc(arr.length / 2) ;
  //   console.log("Median Value: ", arr[midIndex])
}

optimizedSorting(arr);

//////////// Output //////
// Sorted Array:  [ -55,  0, 1, 2, 3, 3, 4,  5, 6, 8, 8, 9,23, 67 ]
//   Number of Iteration:  91

function ultraOptimizedSorting(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      // Make a swap only when a smaller number is found.
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  console.log("Sorted Array: ", arr);
  console.log("Number of Iteration: ", count);
  //   let midIndex = Math.trunc(arr.length / 2) ;
  //   console.log("Median Value: ", arr[midIndex])
}
ultraOptimizedSorting(arr);
