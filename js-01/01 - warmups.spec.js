/**
 * Unit Tests covering the warm-ups exercises.
 *
 * Their primarily function is to ensure, that the
 * development setup like IDE, Node.js, and jest is
 * working.
 */

const {
  add,
  subtract,
  greeting,
  isAdult,
  getMaxNumbers,
  getMultiplyFn
} = require("./01 - warmups");

describe("warm-up exercises", () => {
  it("should add 1 + 1", () => expect(add(1, 1)).toBe(2));

  it("should add -5 + 2", () => expect(add(-5, 2)).toBe(-3));

  it("should subtract 5 - 3", () => expect(subtract(5, 3)).toBe(2));

  it("should subtract 2 - 5", () => expect(subtract(2, 5)).toBe(-3));

  it("should greet", () => expect(greeting("Mr. X")).toBe("Hello Mr. X"));

  it("should identify 10 years as non-adult", () =>
    expect(isAdult(10)).toBe(false));

  it("should identify 20 years as adult", () => {
    expect(isAdult(20)).toBe(true);
  });

  it("should get the maximum number of an array of numbers", () =>
    expect(getMaxNumbers([5, 9, 1, 8, 2, 4])).toBe(9));

  it("should get maximum number of an array of negative numbers", () =>
    expect(getMaxNumbers([-5, -9, -3, -1])).toBe(-1));

  it("should return a function that multiplies its parameter by 5", () => {
    const multiplyFn = getMultiplyFn();
    expect(multiplyFn(2)).toBe(10);
  });
});
