// A function that checks whether or not open parenthesis, curly braces and or brackets are balanced.
// The function should check each open container has a matchin closing container.
// If balanced return true.
// If not balanced return false.

function balancedContainers(str) {
  let openCont = [];
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (current == "(" || current == "{" || current == "[")
      openCont.push(current);
    else if (current == ")") {
      if (openCont.includes("(")) {
        let parIndex = openCont.indexOf("("); //get index of "("
        //remove '(' from the openCont array
        openCont.splice(parIndex, 1);
      } else return false;
    } else if (current == "}") {
      if (openCont.includes("{")) {
        let curIndex = openCont.indexOf("{"); //get index of  "{"
        //remove '{' from the openCont array
        openCont.splice(curIndex, 1);
      } else return false;
    } else if (current == "]") {
      if (openCont.includes("[")) {
        let braIndex = openCont.indexOf("["); //get index of  "["
        //remove '[' from the openCont array
        openCont.splice(braIndex, 1);
      } else return false;
    }
  }
  if (openCont.length == 0) return true;
  return false;
}

console.log(balancedContainers("(())")); // true
console.log(balancedContainers("{{}}")); // true
console.log(balancedContainers("}}{{")); // false
console.log(balancedContainers("[[]]")); // true

console.log(balancedContainers("[()]")); // true
console.log(balancedContainers("[([{}])]")); // true

console.log(balancedContainers("[[{}])]")); // false
console.log(balancedContainers("[([{])]")); // false

console.log(balancedContainers("[([{])}]")); // true ,but it should be false
console.log(balancedContainers("[(}[{]))]")); // false

// Checking whether a string of brackets is balanced or not.
// For this function 'Stack' data structure is used.

let isBalanced = (input) => {
  let brackets = "[]{}()<>";   // Comparision array.
  let stack = [];

  for (let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket);
      // Find the index of the current bracket.
    if (bracketsIndex % 2 === 0) {  // Check if the current bracket is opening bracket (Even index element).
      stack.push(bracketsIndex + 1); // If true, add its equivalent closing bracket.
    } else { // If it is a closing bracket,
      if (stack.pop() !== bracketsIndex) { // Check if the current closing bracket doesn't match the last closing bracket element.
        return false;     // IF it doesn't match retrun false.
      }
    }
  }
  return stack.length === 0; // True only if all brackets have canceled out.
};

console.log("isBalanced", isBalanced("[([{])}]")); // false
console.log("isBalanced", isBalanced("[([{}])]")); // true
