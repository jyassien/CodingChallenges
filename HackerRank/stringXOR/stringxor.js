// Given two strings consisting of digits 0 and 1 only,
// find the XOR of the two strings.

const stringXOR = (str1, str2) => {
  console.log("String1 is", str1);
  console.log("String1 is", str2);

  let strXor = "";
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2[i]) {
      strXor += "0";
    } else strXor += "1";
  }

  console.log("string1 and string2 XOR is:", strXor);
};

stringXOR("11011101", "10110001");  //  01101100
