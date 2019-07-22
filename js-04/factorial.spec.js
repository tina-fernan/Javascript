const { factorial } = require("./factorial");

describe("factorial should calculate the factorial of any number", () => {
  it("should calc factorial of 9", () => expect(factorial(9)).toBe(362880));

  it("should calc factorial of 1", () => expect(factorial(1)).toBe(1));

  it("should calc factorial of 0", () => expect(factorial(0)).toBe(1));

  it("should calc factorial of 4", () => expect(factorial(4)).toBe(24));
});
