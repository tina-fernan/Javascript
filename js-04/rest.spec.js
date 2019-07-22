const { rest } = require("./rest");

describe(`
rest should return all elements of an array except the first.
You are not allowed to use slice or shift`, () => {
  it("should return all elements of an array expect the first", () => {
    const numbers = [1, 2, 3, 5];
    numbers.slice = null; // disable slice
    numbers.shift = null; // disable shift
    expect(rest(numbers)).toEqual([2, 3, 5]);
  });

  it("should an empty array, if we only have one elment", () => {
    expect(rest([1])).toEqual([]);
  });
});
