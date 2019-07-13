const { mapOnlyStrings } = require("./mapOnlyStrings");

describe(`
  mapOnlyStrings is customised version of original map function.
  It only maps if the output of the mappingFunction is a string. 
  Otherwise it would return the input value.
`, () => {
  it("should get the first letter", () => {
    const terms = ["Darth Vader", "3CPO", "Luke Skywalker", "X-Wing"];
    expect(mapOnlyStrings(terms, term => term[0])).toEqual([
      "D",
      "3",
      "L",
      "X"
    ]);
  });
  it("should add 5", () => {
    const symbols = [1, "1", true, "foobar"];
    expect(mapOnlyStrings(symbols, symbol => symbol + 5)).toEqual([
      1,
      "15",
      true,
      "foobar5"
    ]);
  });

  it("should map booleans", () => {
    const conditions = [5 > 4, true !== false, null == undefined, "a" === "A"];
    expect(
      mapOnlyStrings(conditions, condition => (condition ? true : "false"))
    ).toEqual([true, true, true, "false"]);
  });

  it("should map all numbers when transformed to strings", () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(mapOnlyStrings(numbers, number => "0" + number)).toEqual([
      "01",
      "02",
      "03",
      "04",
      "05"
    ]);
  });
});
