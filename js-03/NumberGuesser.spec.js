const { NumberGuesser } = require("./NumberGuesser");

describe("NumberGuesser allows us to guess a number and is counting the tries", () => {
  it("should let us guess for 5 with 5 tries", () => {
    const numberGuesser = new NumberGuesser(5);

    expect(numberGuesser.guess(1)).toBe("below");
    expect(numberGuesser.guess(3)).toBe("below");
    expect(numberGuesser.guess(10)).toBe("above");
    expect(numberGuesser.guess(7)).toBe("above");
    expect(numberGuesser.guess(5)).toBe("hit");
    expect(numberGuesser.getTries()).toBe(5);
  });

  it("should let us guess for 7 on the first try", () => {
    const numberGuesser = new NumberGuesser(7);

    expect(numberGuesser.guess(7)).toBe("hit");
    expect(numberGuesser.getTries()).toBe(1);
  });

  it("should let us guess for 26 with 7 tries", () => {
    const numberGuesser = new NumberGuesser(26);

    expect(numberGuesser.guess(3)).toBe("below");
    expect(numberGuesser.guess(10)).toBe("below");
    expect(numberGuesser.guess(30)).toBe("above");
    expect(numberGuesser.guess(20)).toBe("below");
    expect(numberGuesser.guess(25)).toBe("below");
    expect(numberGuesser.guess(27)).toBe("above");
    expect(numberGuesser.guess(26)).toBe("hit");
    expect(numberGuesser.getTries()).toBe(7);
  });
});
