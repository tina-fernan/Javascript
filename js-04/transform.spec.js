const { transform } = require("./transform");

describe(`
transform should transform each value of the
passed array to another one, by the transformFn
and return a new array with that values.
You can't use the built-in reduce or map
`, () => {
  it("should add 1 to each element", () => {
    const numbers = [1, 2, 3, 4, 5];
    numbers.map = null;
    numbers.reduce = null;

    expect(transform(numbers, number => number + 1)).toEqual([2, 3, 4, 5, 6]);
  });

  it("should check if elements are larger than 10", () => {
    const numbers = [10, 3, 5, 11, 7];
    numbers.map = null;
    numbers.reduce = null;
    expect(transform(numbers, number => number >= 10)).toEqual([
      true,
      false,
      false,
      true,
      false
    ]);
  });

  it("should check multiply by 10", () => {
    const numbers = [10, 3, 5, 11, 7];
    numbers.map = null;
    numbers.reduce = null;
    expect(transform(numbers, number => number * 10)).toEqual([
      100,
      30,
      50,
      110,
      70
    ]);
  });
});
