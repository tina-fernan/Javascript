const { dateFormatter } = require("./dateFormatter");

describe("dateFormatter", () => {
  it("should format 2017-12-24", () =>
    expect(dateFormatter(new Date("2017-12-24 0:00"))).toBe("2017-12-24 0:00"));

  it("should format 1999-01-01 1:00", () =>
    expect(dateFormatter(new Date("1999-01-01 1:00"))).toBe("1999-01-01 1:00"));
});
