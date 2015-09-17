var translator = function(userWord) {
  var splitAt = indexOfFirstVowel(userWord); // split at the index of the first vowel
  return userWord.slice(splitAt) + userWord.slice(0, splitAt) + 'ay';
};

  var indexOfFirstVowel = function(word) {  //find index of first vowel by having a list of vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var letters = word.split("");         //split the word into letters

    for (var i = 0; i < letters.length; i++) {  //loop through all the letters
      for (var j = 0; j < vowels.length; j++) {  //loop through all the vowels
          if (letters[i] === vowels[j]) {  //when we find they are equal
            return i                        //we return the index of the letter we are at
          }
        }                         //then...back to top.  We build pigLatin by sliceing it up
      }
  };
