
function uniteUnique(arr) {
  
  var newArr = [];
  for (var i = 0; i < arguments.length; i++){
    newArr.push(arguments[i]); //push arguments to newArr
  }
  console.log(newArr);
  newArr = [].concat.apply([], newArr);// flatten newArr
  //console.log(newArr);
  var uniqueArray = newArr.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) == pos;
  });
    
  //}
  return uniqueArray;
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//uniteUnique([1, 2, 3], [5, 2, 1]);
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
