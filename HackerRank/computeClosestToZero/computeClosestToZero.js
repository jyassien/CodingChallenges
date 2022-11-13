// Analyze an aray of a records of temperature to find the closest to zero.
// If to numbers are equal distance, the positive number will be choosen.
// If no Temprature value is given, return 0.

function computeClosestToZero(temp) {
  if (temp.length === 0) return 0;    // Check if the array is empty before proceeding.

  let minT = Math.abs(temp[0]);     // Initialize minimum temp to the first element of array.
  let closest = temp.indexOf(minT); // Initialize the closest temp to first index of array.

  for (let i = 0; i < temp.length; i++) {
    let current = Math.abs(temp[i]);
    if (minT > current) {
      minT = current;           // When another closest temp is found, assign it to the minimum temp.
      closest = temp.indexOf(temp[i]);    // Update the closest index number.
    } else if (minT === current) {    // If two tempratures are of the same amount,
      if (temp[i] > 0) {              // select the one that has positive value.
        closest = temp.indexOf(current);
      }
    }
  }
  return temp[closest];       // Return the closest to zero temp value in the given array of temperatures.
}

console.log(computeClosestToZero([3, 23, -5, 7])); // 3
console.log(computeClosestToZero([])); // 0
console.log(computeClosestToZero([6, -43, -6, 37])); // 6
console.log(computeClosestToZero([-4, -43, -2, 37])); // -2
