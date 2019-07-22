const { sortBy } = require("./sortBy");

describe(`
sortBy takes an array and a sortFn, whereas the
sortFn just returns the value that should be used
by the built-in sort`, () => {
  it("should sort cities", () => {
    const cities = ["Vienna", "Paris", "Budapest"];

    const sortFn = city => {
      switch (city) {
        case "Vienna":
          return 1;
        case "Paris":
          return 3;
        case "Budapest":
          return 2;
      }
    };

    expect(sortBy(cities, sortFn)).toEqual(["Vienna", "Budapest", "Paris"]);
  });

  it("should sort after the second character", () => {
    const names = ["Hans", "Judith", "Elias", "Thomas"];
    expect(sortBy(names, name => name[1])).toEqual([
      "Hans",
      "Thomas",
      "Elias",
      "Judith"
    ]);
  });
});
