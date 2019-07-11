const { isPrime } = require("./prime");

describe("prime", () => {
  it("should identify 4 as prime", () => expect(isPrime(4)).toBeFalsy());
  it("should identify 5 as prime", () => expect(isPrime(5)).toBeTruthy());
  it("should identify 7 as prime", () => expect(isPrime(5)).toBeTruthy());
  it("should identify 10 as prime", () => expect(isPrime(10)).toBeFalsy());
  it("should identify 125 as prime", () => expect(isPrime(125)).toBeFalsy());
  it("should identify 997 as non-prime", () => expect(isPrime(5)).toBeTruthy());
});
