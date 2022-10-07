function flippingBits(n) {
  // Write your code here

  let bits = "";
  let bitsFlipped = "";
  let bit32 = "00000000000000000000000000000000";
  let bit32Flipped = "11111111111111111111111111111111";
  let r = 0;
  let flippedDecimal = 0;

do {
  r = n % 2;
    n = (n - r) / 2;
    bits += r;
} while (n > 0);

  // while (n > 0) {
  //   r = n % 2;
  //   n = (n - r) / 2;
  //   bits += r;
  // }

  let new32Bit = bit32.substring(0, 32 - bits.length) + bits;

  for (let i = 0; i < bits.length; i++) {
    if (bits[i] == "0") bitsFlipped += "1";
    else bitsFlipped += "0";
  }
  let new32BitFlipped =
    bit32Flipped.substring(0, 32 - bitsFlipped.length) + bitsFlipped;

  //   console.log(r, n);

  console.log("bits ", bits);
  console.log("bits Flipped ", bitsFlipped);
  //   console.log(bit32);
  console.log(new32Bit);
  //   console.log("Flipped", bit32Flipped);
  console.log("Flipped", new32BitFlipped);

  let power = 31;
  for (let i = 0; i < 32; i++) {
    flippedDecimal += (new32BitFlipped[i] * 2 ** power);

    power--;
  }

  console.log(flippedDecimal);
  // return n;
}

// flippingBits(4);
// flippingBits(5);
// flippingBits(1);
// flippingBits(9);
// flippingBits(802743475);

flippingBits(2147483647);
flippingBits(1);
flippingBits(0);
