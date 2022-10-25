function pangrams(s) {
  // A pangram is a string that contains every letter of the alphabet.
  s = s.toLowerCase(); // 97 to 122
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  if (s.length < 26) return "not pangram";
  for (let i = 0; i < alpha.length; i++) {
    if (s.includes(alpha[i])) continue;
    else return "not pangram";
  }
  return "pangram";
}

// Test cases
console.log(pangrams("The quick brown fox jumps over the lazy dog."));                  // pangram
console.log(pangrams("we promply judged antique ivory buckles for the next prize."));   // pangram
console.log(pangrams("we promply judged antique ivory buckles for the prize."));        // not pangram
console.log(pangrams("The sentence is too short"));                                     // not pangram
