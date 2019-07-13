const { getUnique } = require("./unique");

describe("getUnique", () => {
  it("should get the unique value", () =>
    expect(getUnique([1, 1, 1, 1])).toEqual([1]));

  it("should get unique values", () =>
    expect(getUnique([1, 2, 3, 1, 2, 4])).toEqual([1, 2, 3, 4]));

  it("should get unique values in sorted order", () =>
    expect(getUnique([2, 1, 3, 1, 3, 2, 4, 5])).toEqual([1, 2, 3, 4, 5]));

  it("should get unique values in sorted order", () =>
    expect(getUnique([11, 5, 5, 3])).toEqual([3, 5, 11]));
});
