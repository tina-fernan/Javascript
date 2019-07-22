const { getPropertiesForTen } = require("./getPropertiesForTen");

describe(`
getPropertiesForTen should find all keys for properties which
added to their value end up with 10.`, () => {
  it("should work for the default use case", () => {
    const object = { 1: 5, 10: 0, 5: 5, 7: 3 };
    // explanation: 1+5=6, 10+0=10, 5+5=10, 7+3=10 -> keys: 10, 5, 7
    expect(getPropertiesForTen(object)).toEqual(["5", "7", "10"]);
  });

  it("should work for mixed use cases", () => {
    const object = { firstname: "some", lastname: "bar", "1": 9, "2": 9 };
    expect(getPropertiesForTen(object)).toEqual(["1"]);
  });

  it("should not parse string values", () => {
    const object = { "1": 9, "2": "8" };
    expect(getPropertiesForTen(object)).toEqual(["1"]);
  });

  it("should also work for negative numbers", () => {
    const object = { "11": -1, "12": "5" };
    expect(getPropertiesForTen(object)).toEqual(["11"]);
  });
});
