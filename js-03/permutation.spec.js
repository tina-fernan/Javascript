const { permutate } = require("./permutation");

describe("permutation", () => {
  it("should permutate an array with 1 element", () =>
    expect(permutate([1])).toEqual([[1]]));

  it('should permutate ["a", "c"]', () =>
    expect(permutate(["a", "b"])).toEqual([["a", "b"], ["b", "a"]]));

  it("should permutate an array with 3 elements", () =>
    expect(permutate([1, 2, 3])).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1]
    ]));
});
