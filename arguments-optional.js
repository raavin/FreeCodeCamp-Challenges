
function addTogether() {
  var outerArg = arguments[0];
  if ( typeof outerArg !== "number"){
    return undefined;
  } else {
    if (arguments.length == 2 ){
        return arguments[0] + arguments[1];
    } else {
      return function(innerArg) {
        if (typeof innerArg !== "number"){
          return undefined;
        } else {
          return outerArg + innerArg;
        }

      };
    }
  }
}
//var sumTwoAnd = addTogether();
//addTogether(2,3);
//addTogether(1)(4);
//addTogether("http://bit.ly/IqT6zt");
//addTogether(2, "3");
addTogether(2)([3]);
