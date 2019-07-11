const { flatten } = require("./flatten");

describe("flatten", () => {
  it("should flatten a nested array", () =>
    expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]));

  it("should flatten an array with multiple dimensions", () =>
    expect(flatten([1, [2], [[3, 4]]])).toEqual([1, 2, 3, 4]));
});
