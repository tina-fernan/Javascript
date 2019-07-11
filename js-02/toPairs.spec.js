const { toPairs } = require("./toPairs");

describe("toPairs", () => {
  it("should return pairs of an object with two properties", () => {
    const vienna = { population: 1868000, size: 414.87 };

    expect(toPairs(vienna)).toEqual([
      ["population", 1868000],
      ["size", 414.87]
    ]);
  });

  it("should return the pairs in an ordered way", () => {
    const graz = { size: 12748, population: 286292 };

    expect(toPairs(graz)).toEqual([["population", 286292], ["size", 12748]]);
  });
});
