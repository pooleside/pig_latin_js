var startsWithVowel= function(userWord) {
  if (userWord[0] === 'a' || userWord[0] === 'e' || userWord[0] === 'i' ||userWord[0] === 'o' ||userWord[0] === 'u') {
    return userWord + "ay";
  } else {
    return userWord.slice(1) + userWord[0] + 'ay';
  }
};
