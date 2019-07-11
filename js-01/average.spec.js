const { getAverage } = require("./average.js");

describe("mathematical functions", () => {
  it("should calculate the average", () =>
    expect(getAverage([5, 10, 11, 1, 3])).toBe(6));

  it("should calculate the avage with non-integers", () =>
    expect(getAverage([2, 3])).toBe(2.5));
});
