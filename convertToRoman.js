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
      romanNumeralArray.push("X");
    }
  });
 return romanNumeralArray.reverse().join("");
}

convertToRoman(16);
