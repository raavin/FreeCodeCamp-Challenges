
function convertHTML(str) {
  var character = [/&/g, /</g, />/g, /"/g, /'/g];
  var htmlEntities = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

  for (var i = 0; i < character.length; i++){
    str = str.replace(character[i], htmlEntities[i]);
  }

  return str;
}

//convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
