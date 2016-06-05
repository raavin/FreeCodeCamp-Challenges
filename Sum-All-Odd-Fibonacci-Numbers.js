
function sumFibs(num) {
  var duo = [1,1];
  var nextNumber = 0;
  var totalOdd = 0;
  for (var i = 0; i < num; i++){
    nextNumber = duo[0] + duo[1];
    if (nextNumber%2 !== 0){
      totalOdd = totalOdd + nextNumber;
    }
    duo.push(nextNumber);
    duo.shift();
  }
  return totalOdd;
}

sumFibs(4);
