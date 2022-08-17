const plalindrome = (str) => {
  let len = str.length;
  let midIndex = Math.floor(len / 2);   

  for (let i = 0; i <= midIndex; i++) {
    if (str[i] == str[len - i - 1]) {    // Compares each element at both sides of the string.
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(plalindrome("rotator"));
console.log(plalindrome("racecar"));
console.log(plalindrome("absbsa"));

////////// OutPut ///////////
true;
true;
false;
/////////////////////
