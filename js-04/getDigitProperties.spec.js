const { getDigitProperties } = require("./getDigitProperties");

describe(`
getDigitProperties should return the name of an object's
properties that contain at one digit.
Use regular expressions`, () => {
  it("should work with a normal use case", () => {
    expect(getDigitProperties({ foo1: "abcd", t3st: "test", name: 1 })).toEqual(
      ["foo1", "t3st"]
    );
  });

  it("should return an empty list, if nothing is available", () =>
    expect(getDigitProperties({})).toEqual([]));
});
