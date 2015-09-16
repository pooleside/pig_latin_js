var translator = function(userWord) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if(userWord[0] === vowels[i]) {
      var startsWithVowel = true;
        break;
      }
  }

    if (startsWithVowel) {
    var pigLatinWord = userWord;
  } else {
    var pigLatinWord = userWord.slice(1) + userWord[0];
  }
    return pigLatinWord + "ay";
};
