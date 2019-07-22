const { fromPairs } = require("./fromPairs");

describe(`
fromPairs is the opposite function of to pairs.
We pass a an array containing arrays of two elements and
it should create an object where the first element is the
property's name and the other the value.
`, () => {
  it("should create a simple object", () => {
    expect(fromPairs([["a", 1], ["b", 2]])).toMatchObject({ a: 1, b: 2 });
  });

  it("should create an object with array as value", () => {
    expect(fromPairs([["colours", ["red", "blue", "yellow"]]])).toMatchObject({
      colours: ["red", "blue", "yellow"]
    });
  });

  it("should create an object with a nested object as value", () => {
    expect(
      fromPairs([["foo", { a: 1, b: 2, c: 3 }], ["test", 1]])
    ).toMatchObject({
      foo: { a: 1, b: 2, c: 3 },
      test: 1
    });
  });
});
