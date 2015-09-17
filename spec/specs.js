describe('translator', function() {
  it("adds ay to the end of a word that starts with a vowel", function() {
    expect(translator("eat")).to.equal("eatay");
  });

  it("takes the consonant at the beginning of a word and moves it to the end", function() {
    expect(translator("car")).to.equal("arcay");
  });

  it("takes two consonants at the beginning of a word and moves to the end", function() {
    expect(translator("thunder")).to.equal("underthay");
  });
});

describe("indexOfFirstVowel", function() {
  it("returns 0 for a word that starts with a vowel", function() {
    expect(indexOfFirstVowel("apple").to.equal(0));
  });

  it("returns 1 for a word that starts with a single consonant", function() {
    expect(indexOfFirstVowel("cat").to.equal(1));
  });
});
