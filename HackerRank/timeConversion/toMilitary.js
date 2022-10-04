function timeToMilitaryConversion(s) {
    // Write your code here
    // Given a string of time in 12 hours format,
    // Find the equivalent 24 hours format.
    let str = s;
    let hr = Number(str.substring(0,2))
    let ap = str.substring(8, 9)
    
    let mHr = ""
    if( ap == "A" ){
        if (hr < 12) mHr = str.substring(0,8)
        else if (hr == 12) mHr = "00" + str.substring(2,8)
        return mHr
    }
    if(ap == "P"){
        if (hr == 12) mHr = str.substring(0,8)
        else if (hr < 12) mHr = (12 + hr) + str.substring(2,8)
        return mHr
    }
    
    // console.log(hr, ap);
    // console.log(mHr);
}

console.log(timeToMilitaryConversion("12:01:00AM"));
// 00:01:00
console.log(timeToMilitaryConversion("12:01:00PM"));
// 12:01:00
console.log(timeToMilitaryConversion("02:01:00AM"));
// 02:01:00
console.log(timeToMilitaryConversion("11:01:00PM"));
// 23:01:00
console.log(timeToMilitaryConversion("01:01:00PM"));
// 13:01:00
