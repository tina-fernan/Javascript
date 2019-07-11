const { getMinMaxNumber } = require("./minMax");

describe("getMinMaxNumber", () => {
  it("should get min and max for array", () =>
    expect(getMinMaxNumber([28, 32, 21, 35, 37])).toEqual([21, 37]));

  it("should get min and max for just one-sized array", () =>
    expect(getMinMaxNumber([1])).toEqual([1, 1]));
});
