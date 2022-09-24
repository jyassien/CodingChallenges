function plusMinus(arr) {
    // A function Given an array of integers, 
    // calculate the ratios of its elements that 
    // are positive, negative, and zero. 
    // Print the decimal value of each fraction on a new
    // line with  places after the decimal.

    let pos = 0;
    let neg = 0;
    let zer = 0;
    
    for(let i =0; i < arr.length; i++){
        if(arr[i] > 0) {pos++}
        else if(arr[i] < 0) {neg++}
        else {zer++}
        
    }
    pos = pos/arr.length
    pos = pos.toFixed(6)
    neg = neg/arr.length
    neg = neg.toFixed(6)
    zer = zer/arr.length
    zer = zer.toFixed(6)
    
    console.log(pos);
    console.log(neg);
    console.log(zer);

}

plusMinus([4,6,0,-3,0,0,-2,5,6])