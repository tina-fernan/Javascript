const { addPropertyToFn } = require("./addPropertyToFn");

describe(`
addPropertyToFn allows us to add new properties
to a function.
Hint: Don't think too complicated ;)`, () => {
  it("should add a foo - bar", () => {
    const fn = function() {
      return "foo";
    };
    addPropertyToFn(fn, "foo", "bar");
    expect(fn.foo).toBe("bar");
  });

  it("should add an object", () => {
    const fn = function() {
      return {};
    };
    addPropertyToFn(fn, "object", { foo: "bar" });
    expect(fn.object).toMatchObject({ foo: "bar" });
  });

  it("should add a property with a number as value", () => {
    const fn = function() {
      return true;
    };
    const propertyName = "number";
    addPropertyToFn(fn, propertyName, 5);

    expect(fn.number).toBe(5);
  });
});
