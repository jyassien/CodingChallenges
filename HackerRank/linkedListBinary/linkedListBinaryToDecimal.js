
/*
 * Complete the 'getNumber' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_SINGLY_LINKED_LIST binary as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getNumber(binary) {
    // Write your code here
    // console.log(binary.next.next.next.next.next.next)
    // console.log(binary.next.next.next.next.next)
    // console.log(binary.next.next.next.next)
    // console.log(binary.next.next.next)
    // console.log(binary.next.next)
    let binArr = []
    let isNull = binary.next;
    let isData = binary.data
    while(isNull != null){
    // console.log(isData)
    binArr.push(isData)
        isData = isNull.data
        isNull = isNull.next;
        if(isNull == null){
            binArr.push(isData)
        }
    } 
    let binToDec = 0;
    for (let i = binArr.length - 1; i >= 0; i--){
        // console.log(i)
        let binInd = binArr.length -1 - i;
        console.log(binArr[binInd])
        binToDec += (binArr[binInd] * (2**i))
    }  
    return binToDec;
}