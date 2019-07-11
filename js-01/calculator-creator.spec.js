const { createOperation } = require("./calculator-creator");

describe("calculator-creator", () => {
  it("should create an add operation", () => {
    const addOperation = createOperation(
      (number1, number2) => number1 + number2
    );
    expect(addOperation(1, 2)).toEqual(3);
  });

  it("should create a modulo operator", () => {
    const moduloOperation = createOperation(
      (number1, number2) => number1 % number2
    );
    expect(moduloOperation(5, 2)).toBe(1);
  });

  it("should create a power operator", () => {
    const powerOperation = createOperation((number1, number2) =>
      Math.pow(number1, number2)
    );
    expect(powerOperation(2, 8)).toBe(256);
  });

  it("should allow us to combine operators", () => {
    const multiply = createOperation((number1, number2) => number1 * number2);
    const divide = createOperation((number1, number2) => number1 / number2);
    const subtract = createOperation((number1, number2) => number1 - number2);

    expect(divide(multiply(5, 4), subtract(20, 10))).toBe(2);
  });
});
