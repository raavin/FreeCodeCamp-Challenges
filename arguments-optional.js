
function addTogether() {
  var args = [...arguments];
  var outerArg = args[0];
  if ( typeof outerArg !== "number"){
    return undefined;
  } else {
    if (args.length == 2 ){
      if (args[1] !== "number"){
        return undefined;
      } else {
        return args[0] + args[1];//need to check for stringiness here
    } else {
      return function(innerArg) {
        console.log(typeof innerArg);
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
addTogether(2,3);
//addTogether(1)(4);
//addTogether("http://bit.ly/IqT6zt");
//addTogether(2, "3");
//addTogether(2)([3]);
