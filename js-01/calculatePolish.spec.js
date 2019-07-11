const { calculatePolish } = require("./calculatePolish");

describe("Polish calculator", () => {
  it("should calc + 1 1", () => expect(calculatePolish("+", 1, 1)).toBe(2));
  it("should calc * 5 5", () => expect(calculatePolish("*", 5, 5)).toBe(25));
  it("should calc / 20 5", () => expect(calculatePolish("/", 20, 5)).toBe(4));
  it("should calc - 5 6", () => expect(calculatePolish("-", 5, 6)).toBe(-1));
});
