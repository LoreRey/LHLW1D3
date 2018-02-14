function countLetters(string) {
  var noCharacters = string.split(" ").join("").toLowerCase();
  var letters = {};

  for(var i = 0; i < noCharacters.length; i++) {
    var character = noCharacters.charAt(i);
    if(letters[character]) {
      letters[character]++;
    } else {
      letters[character] = 1;
    }
  }
return letters

};

console.log(countLetters("lighthouse in the house"))