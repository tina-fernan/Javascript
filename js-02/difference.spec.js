const { getDifference } = require("./difference");

describe("getDifference", () => {
  it("should get the difference", () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [3, 4, 5, 6, 7];
    expect(getDifference(array1, array2)).toEqual([1, 2, 6, 7]);
  });

  it("should get difference with no matches", () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    expect(getDifference(array1, array2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should get no difference with same elements", () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [4, 3, 2, 1];
    expect(getDifference(array1, array2)).toEqual([]);
  });
});
