describe('startsWithVowel', function() {
  it("adds ay to the end of a word that starts with a vowel", function() {
    expect(startsWithVowel("eat")).to.equal("eatay");
  });

  it("takes the consonant at the beginning of a word and moves it to the end", function() {
    expect(startsWithVowel("car")).to.equal("arcay");
  });
});
