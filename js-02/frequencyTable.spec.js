const { getFrequencyTable } = require("./frequencyTable");

describe("getFrequencyTable", () => {
  it("should get the frequency table from a normal array", () => {
    const array = [1, 3, 5, 5, 1, 1];
    const expectedFrequencyTable = { "1": 3, "3": 1, "5": 2 };
    expect(getFrequencyTable(array)).toEqual(expectedFrequencyTable);
  });
});
