// Check if the opening and closing parentheses are balanced.
// Find Each opening parentheses must match with closing parentheses. 
// Closing parentheses should be preceded by opening parentheses.
function balancedParenthesis(str) {
    let openPar = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "(" ) openPar++;
        if(str[i] == ")" ) {
           if(openPar > 0) {
               openPar--;
           }else{
               return false;
           }
        }
    }
    if (openPar == 0) return true;
  return false;
}

console.log(balancedParenthesis('')); // true
console.log(balancedParenthesis('(ad((h)ljkle))')); // true
console.log(balancedParenthesis('))((')); // false
console.log(balancedParenthesis('(())')); // true
console.log(balancedParenthesis('((hrdh)')); // false
