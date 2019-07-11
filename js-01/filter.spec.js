const { filter } = require("./filter");

describe("filter", () => {
  it("should filter an array for number larger than 10", () => {
    const array = [1, 15, 20, 10, 12, 13];
    const filterFn = number => number > 10;
    const filteredArray = [15, 20, 12, 13];
    expect(filter(array, filterFn)).toEqual(filteredArray);
  });

  it("should expect the filter function to return only booleans", () => {
    const array = [1,15, 20, 10, 12, 13];
    const filterFn = number => (number  > 10 ? 1 : 0);
    const filteredArray = [];
    expect(filter(array, filterFn)).toEqual(filteredArray);
  });

  it("should allow everything", () => {
    const now = new Date();
    expect(
      filter([undefined, null, false, 0, "foo", 3.13, {}, now], () => true)
    ).toEqual([undefined, null, false, 0, "foo", 3.13, {}, now]);
  });

  it("should filter only falses, regardless of the datatype", () => {
    const array = [0, "", false, true, 1, 5.5, "hello", null];
    const filterFn = value => !value;
    const filteredArray = [0, "", false, null];
    expect(filter(array, filterFn)).toEqual(filteredArray);
  });
});
