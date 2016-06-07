
function truthCheck(collection, pre) {
  // Is everyone being true?
  var userDetails = collection[3];
  //return collection[0].hasOwnProperty(pre);
  if (userDetails.hasOwnProperty(pre) || userDetails[pre] == 0 ? false : true){
    return false;
  } else {
    return true;
  }
}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex");
