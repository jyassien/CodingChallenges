function balancedContainers(str) {
    let openPar = [];
    for(let i = 0; i < str.length; i++){
        let current = str[i]
        if(current == "(" || current == "{" || current == "[") openPar.push(current);
       else if(current == ")" ) {
           if(openPar.includes('(')) {
               // remove '(' from array openPar
               // 
           }
           else return false
       }  
       else if(current == "}" ) {
           if(openPar.includes('{')) {
               // remove '(' from array openPar
               //
           }
           else return false
       }  
       else if(current == "]" ) {
           if(openPar.includes('[')) {
               // remove '(' from array openPar
               //
           }
           else return false
       }  
      
          
    }
    if (openPar.length == 0) return true;
  return false;
}