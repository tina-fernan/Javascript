const { pipe } = require("./pipe");

describe("pipe", () => {
  it("should pass the result of the first function to the second and return the result", () => {
    const add = () => 2 + 3;
    const multiply = number => number * 10;

    expect(pipe([add, multiply])).toBe(50);
  });

  it("should pipe the multiply 4 times", () => {
    const initial = () => 1 * 1;
    const multiply = number => number * 2;

    expect(pipe([initial, multiply, multiply, multiply, multiply])).toBe(16);
  });

  it("should return 1 if there are no functions", () => {
    expect(pipe([])).toBe(0);
  });
});
