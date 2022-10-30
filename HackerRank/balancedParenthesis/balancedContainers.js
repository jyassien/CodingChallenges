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