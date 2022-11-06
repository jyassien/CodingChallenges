function pangrams(s) {
  // A pangram is a string that contains every letter of the alphabet.
  s = s.toLowerCase(); // Change the argument string to lower cases.   
  let alpha = "abcdefghijklmnopqrstuvwxyz";  // Comparision string. 

  if (s.length < 26) return "not pangram";  // If the string is less character than the actual english alphabet, return 'non pangrams'
  for (let i = 0; i < alpha.length; i++) {
    if (s.includes(alpha[i])) continue; // If each alphabet letter are included in the string, skip the current loop.
    else return "not pangram";
  }
  return "pangram";
}

// Test cases
console.log(pangrams("The quick brown fox jumps over the lazy dog."));                  // pangram
console.log(pangrams("we promply judged antique ivory buckles for the next prize."));   // pangram
console.log(pangrams("we promply judged antique ivory buckles for the prize."));        // not pangram
console.log(pangrams("The sentence is too short"));                                     // not pangram
