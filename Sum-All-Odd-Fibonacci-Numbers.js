
function sumFibs(num) {
  var duo = [1,1];
  var nextNumber = 0;
  var totalOdd = 1;
  for (var i = 0; duo[0] + duo[1] <= num; i++){
    nextNumber = duo[0] + duo[1];
    console.log(nextNumber);
    if (nextNumber%2 !== 0){
      totalOdd = totalOdd + nextNumber;
    }
    duo.push(nextNumber);
    duo.shift();
  }
  console.log(duo);
  console.log(totalOdd);
  return totalOdd + 1;
}

sumFibs(4);
sumFibs(75024);
