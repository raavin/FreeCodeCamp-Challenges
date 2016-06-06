
function addTogether(first,second) {
  var name = "Mozilla";
  function oneArgument(oneArg) {
    alert(name);
  }
  return oneArgument;
}

addTogether(2,3);
var sumTwoAnd = addTogether();
sumTwoAnd();




