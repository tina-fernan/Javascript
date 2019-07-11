const { calculate } = require("./calculate");

describe("calculator", () => {
  it("should calc 1 + 1", () => expect(calculate(1, "+", 1)).toBe(2));

  it("should calc 5 * 5", () => expect(calculate(5, "*", 5)).toBe(25));

  it("should calc 20 / 4", () => expect(calculate(20, "/", 5)).toBe(4));

  it("should calc 5 - 6", () => expect(calculate(5, "-", 6)).toBe(-1));
});
