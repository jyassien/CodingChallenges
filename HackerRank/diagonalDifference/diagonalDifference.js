function diagonalDifference(arr2D) {
  // Write your code here
  let len = arr2D.length;
  let primary = 0;
  let secondary = 0;
  for (let i = 0; i < len; i++) {
    // console.log("i ", i, " ", arr2D[i]);
    for (let j = len - 1; j >= 0; j--) {
      //   console.log("j ", j, " ", arr2D[i][j]);
      if (i == j) {
        primary += arr2D[i][j];
      }
      if (j == len - i - 1) {
        secondary += arr2D[i][j];
        // console.log(i, " ", j);
      }
    }
  }
  console.log("Primary Diagonal sum: ", primary);
  console.log("Seconday Diagonal sum: ", secondary);
  console.log("Diagonal Difference is: ", Math.abs(primary - secondary));
}
/*
[0,0] [1,1] [2,2]  [3,3]  [4,4]  
[0,4] [1,3] [2,2]  [3,1]  [4,0]  

j = len - i -1
  
  [1, 3, 8, 5, 6],
  [1, 3, 8, 5, 6],
  [1, 3, 8, 5, 6],
  [1, 3, 8, 5, 6],
  [1, 3, 8, 5, 6],
*/

let array2D = [
  [2, 4, 5],
  [6, 7, 9],
  [1, 3, 8],
];
// console.log(array2D);
diagonalDifference(array2D);
