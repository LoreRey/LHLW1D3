function countLetters(string) {
  var noCharacters = string.split(" ").join("").toLowerCase();
  var letters = {}

  for(var i = 0; i < noCharacters.length; i++) {
    var character = noCharacters.charAt(i);


    if(letters[character]) {
      var position = noCharacters.indexOf(character, position + 1)
      letters[character].push(position);
    } else {
       var position = noCharacters.indexOf(character)
      letters[character] = [position];
    }
  }
return letters

};

console.log(countLetters("lighthouse in the house"))
