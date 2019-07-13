const { StringBuilder } = require("./StringBuilder");

describe("the stringbuild should allow us to concatenate many strings together", () => {
  it("should create a sentence", () => {
    const sb = new StringBuilder();
    sb.append("I");
    sb.append(" go");
    sb.append(" home");

    expect(sb.toString()).toBe("I go home");
  });
});
