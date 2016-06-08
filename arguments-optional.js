
function addTogether() {
  var outerArg = arguments[0];
  if (arguments.length == 2){
      return arguments[0] + arguments[1];
  } else {
    return function(innerArg) {
      return outerArg + innerArg;
  };
  }
}
var sumTwoAnd = addTogether();
//addTogether(2,3);
addTogether(1)(4);

