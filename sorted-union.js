
function uniteUnique(arr) {
  
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr.push(arguments[i]); //push arguments to newArr
  }
  newArr = [].concat.apply([], newArr);// flatten newArr
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
