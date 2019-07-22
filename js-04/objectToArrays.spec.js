const { objectToArray } = require("./objectToArray");

describe("", () => {
  it("should deal with a normal object", () => {
    expect(objectToArray({ firstname: "Hugo", lastname: "Schmidt" })).toEqual([
      ["firstname", "Hugo"],
      ["lastname", "Schmidt"]
    ]);
  });

  it("should deal with an empty object", () => {
    expect(objectToArray({})).toEqual([]);
  });

  it("should deal with a nested object", () => {
    const nested = {
      europe: {
        austria: {
          population: 8773000,
          capital: "Vienna",
          size: 83879
        },
        france: {
          population: 66991000,
          capital: "Paris",
          size: 643801
        },
        germany: {
          population: 82790000,
          capital: "Berlin",
          size: 357386
        },
        italy: {
          population: 60483973,
          capital: "Rome",
          size: 301338
        }
      }
    };

    expect(objectToArray(nested)).toEqual([
      ["europe", "austria", "population", 8773000],
      ["europe", "austria", "capital", "Vienna"],
      ["europe", "austria", "size", 83879],
      ["europe", "france", "population", 66991000],
      ["europe", "france", "capital", "Paris"],
      ["europe", "france", "size", 643801],
      ["europe", "germany", "population", 82790000],
      ["europe", "germany", "capital", "Berlin"],
      ["europe", "germany", "size", 357386],
      ["europe", "italy", "population", 60483973],
      ["europe", "italy", "capital", "Rome"],
      ["europe", "italy", "size", 301338]
    ]);
  });

  it("should handle an object with different levels of nested objects", () => {
    const variant = {
      level1: {
        level2a: 5,
        level2b: {
          level3a: { foo: "bar" },
          level3b: 5
        }
      }
    };

    expect(objectToArray(variant)).toEqual([
      ["level1", "level2a", 5],
      ["level1", "level2b", "level3a", "foo", "bar"],
      ["level1", "level2b", "level3b", 5]
    ]);
  });
});
