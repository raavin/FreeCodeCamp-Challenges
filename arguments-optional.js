
function addTogether() {
  
  if (arguments.length == 2){
      return arguments[0] + arguments[1];
  } else {
    
    return function(x) {
      return arguments[0] + x;
  };
    //return sumTwoAnd();
  }
}
var sumTwoAnd = addTogether();
//addTogether(2,3);
addTogether(1)(4);

