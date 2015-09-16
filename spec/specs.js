describe('startsWithVowel', function() {
  it("adds ay to the end of a word that starts with a vowel", function() {
    expect(startsWithVowel("eat")).to.equal("eatay");
  });
});

describe('moveConsonant', function() {
  it("takes the consonant at the beginning of a word and moves it to the end", function() {
    expect(moveConsonant("car")).to.equal("arc");
  });
});
