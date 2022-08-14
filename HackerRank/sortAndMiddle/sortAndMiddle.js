function sortAndMiddle(arr) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length + 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  let midIndex = Math.trunc(arr.length / 2);
  midIndex = midIndex < arr.length / 2 ? midIndex + 1 : midIndex;
  medianValue = arr.length % 2 == 1? arr[midIndex]: (arr[midIndex]+arr[midIndex + 1])/2;  
  console.log(" Mid Index: ", midIndex);
  console.log(" Sorted Arr: ", arr);
  console.log(" Mid Element: ", arr[midIndex - 1]);
  console.log(" Median Value: ", medianValue);
}

let arr = [5, 23, 2, 4, 6, 1, 67, 3, 3, 9, 0,-55,8];
sortAndMiddle(arr);
