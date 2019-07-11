const { getUnion } = require("./union");

describe("getUnion", () => {
  it("should get the union of two arrays", () => {
    const array1 = [1, 7, 8, 2, 5, 3];
    const array2 = [2, 3, 1, 5];
    expect(getUnion(array1, array2)).toEqual([1, 2, 3, 5]);
  });

  it("should get the union with one element multiple times", () => {
    const array1 = [2, 3, 1, 5, 8, 1];
    const array2 = [9, 1, 4, 6, 1];
    expect(getUnion(array1, array2)).toEqual([1, 1]);
  });

  it("should get the union with no matches", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [5, 6, 7, 8];
    expect(getUnion(array1, array2)).toEqual([]);
  });
});
