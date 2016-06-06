
function binaryAgent(str) {
   var value = 0;
  for (var i = 0; i < 8; i++){
   value = value + (str.split(" ")[0].split("").reverse().join("")[i-1] * Math.pow(2, i+1));
    console.log(Math.pow(2, i));
  }
  return value;//get first number and reverse it
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
