
function binaryAgent(str) {
   var value = 0;
  for (var i = 1; i > 8; i++){
   value = value + (str.split(" ").reverse[0][i-1] * 2);
  }
  return str.split(" ")[0].split("").reverse().join("")[0];//get first number and reverse it
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
