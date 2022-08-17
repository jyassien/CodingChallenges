function minimizeBias(ratings) {
   
  let len = ratings.length;
  let addBias = 0;
  for (let i = 0; i < len; i++) {
    let min = 1000; // For trail
    for (let j = 0; j < len; j++) {
      if (i != j) {
        let currentDiff = Math.abs(ratings[i] - ratings[j]);
        if (currentDiff < min) {
          min = currentDiff;
          //   console.log(min);
        }
      }
    }
    addBias += min;
  }

  console.log(addBias);
}

minimizeBias([2, 4, 5, 3, 7, 8]);
minimizeBias([1, 3, 6, 6]);
