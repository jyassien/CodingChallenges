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
        // remove '(' from array openCont
        let parIndex = openCont.indexOf("("); //get  "(" index
        //remove '(' from the openCont array
        openCont.splice(parIndex, 1);  

      } else return false;
    } else if (current == "}") {
      if (openCont.includes("{")) {
        // remove '{' from array openCont
        let curIndex = openCont.indexOf("{"); //get  "{" index
        //remove '{' from the openCont array
        openCont.splice(curIndex, 1); 

      } else return false;
    } else if (current == "]") {
      if (openCont.includes("[")) {
        // remove '[' from array openCont
        let braIndex = openCont.indexOf("["); //get  "[" index
        //remove '[' from the openCont array
        openCont.splice(braIndex, 1); 
        
      } else return false;
    }
  }
  if (openCont.length == 0) return true;
  return false;
}


console.log(balancedContainers('(())'));  // true
console.log(balancedContainers('{{}}'));  // true
console.log(balancedContainers('}}{{'));  // false
console.log(balancedContainers('[[]]'));  // true

console.log(balancedContainers('[()]'));  // true
console.log(balancedContainers('[([{}])]'));  // true

console.log(balancedContainers('[[{}])]'));  // false
console.log(balancedContainers('[([{])]'));  // false

console.log(balancedContainers('[([{])}]'));  // true ,but it hould be false
console.log(balancedContainers('[(}[{]))]'));  // false