
function binaryAgent(str) {
   var value = 0;
  for (var j = 0; j < str.length; j++){
   for (var i = 1; i < 9; i++){
   value = value + ((str.split(" ")[j].split("").reverse().join("")[i-1]) * Math.pow(2, i));
    console.log(Math.pow(2, i));
   }    
  }

  return value/2;//get first number and reverse it
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
