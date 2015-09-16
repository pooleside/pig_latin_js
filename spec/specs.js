describe('translator', function() {
  it("adds ay to the end of a word that starts with a vowel", function() {
    expect(translator("eat")).to.equal("eatay");
  });

  it("takes the consonant at the beginning of a word and moves it to the end", function() {
    expect(translator("car")).to.equal("arcay");
  });
});
