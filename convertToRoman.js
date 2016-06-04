
function convertToRoman(num) {
  var romanNumeralArray = [];
  var arr = num.toString().split("").reverse();
  arr.forEach(function(element, index){
    if (element == "0" && index === 0){
      romanNumeralArray.push("");
    } else if (element == "0" && index === 0){
      romanNumeralArray.push("");
    } else if (element == "1" && index === 0){
      romanNumeralArray.push("I");
    } else if (element == "2" && index === 0){
      romanNumeralArray.push("II");
    } else if (element == "3" && index === 0){
      romanNumeralArray.push("III");
    } else if (element == "4" && index === 0){
      romanNumeralArray.push("IV");
    } else if (element == "5" && index === 0){
      romanNumeralArray.push("V");
    } else if (element == "6" && index === 0){
      romanNumeralArray.push("VI");
    } else if (element == "7" && index === 0){
      romanNumeralArray.push("VII");
    } else if (element == "8" && index === 0){
      romanNumeralArray.push("VIII");
    } else if (element == "9" && index === 0){
      romanNumeralArray.push("IX");
    } else if (element == "0" && index === 1){
      romanNumeralArray.push("");
    } else if (element == "1" && index === 1){
      romanNumeralArray.push("X");
    } else if (element == "2" && index === 1){
      romanNumeralArray.push("XX");
    } else if (element == "3" && index === 1){
      romanNumeralArray.push("XXX");
    } else if (element == "4" && index === 1){
      romanNumeralArray.push("XL");
    } else if (element == "5" && index === 1){
      romanNumeralArray.push("L");
    } else if (element == "6" && index === 1){
      romanNumeralArray.push("LX");
    } else if (element == "7" && index === 1){
      romanNumeralArray.push("LXX");
    } else if (element == "8" && index === 1){
      romanNumeralArray.push("LXXX");
    } else if (element == "9" && index === 1){
      romanNumeralArray.push("XC");
    } else if (element == "0" && index === 2){
      romanNumeralArray.push("");
    } else if (element == "1" && index === 2){
      romanNumeralArray.push("C");
    } else if (element == "2" && index === 2){
      romanNumeralArray.push("CC");
    } else if (element == "3" && index === 2){
      romanNumeralArray.push("CCC");
    } else if (element == "4" && index === 2){
      romanNumeralArray.push("CD");
    } else if (element == "5" && index === 2){
      romanNumeralArray.push("D");
    } else if (element == "6" && index === 2){
      romanNumeralArray.push("DC");
    } else if (element == "7" && index === 2){
      romanNumeralArray.push("DCC");
    } else if (element == "8" && index === 2){
      romanNumeralArray.push("DCCC");
    } else if (element == "9" && index === 2){
      romanNumeralArray.push("CM");
    }
  });
 return romanNumeralArray.reverse().join("");
}

convertToRoman(16);
