const { reduce } = require("./reduce");

describe(`
reimplement the reduce function without using
the built-in one.`, () => {
  it("should sum up", () => {
    const numbers = [1, 2, 3, 4, 5];
    numbers.reduce = null; // overwriting built-in
    expect(
      reduce(numbers, (accumulator, current) => accumulator + current)
    ).toBe(15);
  });

  it("should work on chars", () => {
    const chars = "gnikrow si ti".split("");
    chars.reduce = null; // overwriting built-in
    expect(reduce(chars, (accumulator, char) => char + accumulator)).toBe(
      "it is working"
    );
  });

  it("should do a factorial", () => {
    const numbers = [5, 4, 3, 2];
    numbers.reduce = null; // overwriting built-in
    expect(reduce(numbers, (accumulator, number) => accumulator * number)).toBe(
      120
    );
  });
});
