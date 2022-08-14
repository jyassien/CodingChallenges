function lonelyinteger(a) {
  let index = null;
  let isUnique = false;
  let i = 0;
  for (; i < a.length; i++) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j]) {
        count++;
        if (count >= 2) {
          isUnique = false;
          break;
        }
      }
      isUnique = true;
    }
    if (isUnique) {
      index = i;
    }
  }

  console.log("Unique index ", index);
  console.log("Unique value ", a[index]);
}

arr = [5, 8, 2, 8, 4, 3, 3, 2, 7, 4, 5];
lonelyinteger(arr);

// /// Output //////
// Unique index  8
// Unique value  7
