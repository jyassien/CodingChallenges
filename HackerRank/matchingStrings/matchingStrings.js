// There is a collection of input strings and
// a collection of query strings. For each query
// string, determine how many times it occurs in
// the list of input strings. Return an array of the results.

function matchingStrings(strings, queries) {
  // Write your code here
  let results = [];

  for (let i = 0; i < queries.length; i++) {
    let qur = queries[i];
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      let str = strings[j];
      if (qur == str) count++;
    }
    results.push(count);
  }
  return results;
}

let string = ["ab", "ab", "bab", "jad", "ja", "jad"];
let query = ["ab", "jad", "ja", "ya"];

console.log(matchingStrings(string, query));
