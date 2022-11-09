// Analyze an aray of a records of temperature to find the closest to zero.

function computeClosestToZero(temp) {
  if (temp.length === 0) return 0;

  let minT = Math.abs(temp[0]);
  let closest = temp.indexOf(minT);

  for (let i = 0; i < temp.length; i++) {
    let current = Math.abs(temp[i]);
    if (minT > current) {
      minT = current;
      closest = temp.indexOf(temp[i]);
    } else if (minT === current) {
      if (temp[i] > 0) {
        closest = temp.indexOf(current);
      }
    }
  }
  return temp[closest];
}

console.log(computeClosestToZero([3, 23, -5, 7]));  // 3
console.log(computeClosestToZero([]));              // 0 
console.log(computeClosestToZero([6, -43, -6, 37])); // 6
console.log(computeClosestToZero([-4, -43, -2, 37])); // -2
