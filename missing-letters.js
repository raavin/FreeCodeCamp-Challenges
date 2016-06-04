
function fearNotLetter(str) {
  
  for (var i=0; i > str.length; i++){
    if ((str.charCodeAt(i+1) - str.charCodeAt(i)) == 1){
      return undefined;
    } else if ((str.charCodeAt(i+1) - str.charCodeAt(i)) == 2){
      console.log(String.fromCharCode(str.charCodeAt(i+1)));
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  //return str.length;
}

fearNotLetter("abce");
