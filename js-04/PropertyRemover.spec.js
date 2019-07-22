const { PropertyRemover } = require("./PropertyRemover");

describe(`
PropertyRemover should create a copy
of an existing object and remove
properties that can be specified.
`, () => {
  it("should remove a property", () => {
    const person = { firstname: "Mel", lastname: "Gibson" };
    const propertyRemover = new PropertyRemover();
    propertyRemover.addPropertyToBeRemoved("lastname");
    const removedPerson = propertyRemover.process(person);

    expect(person).toEqual({ firstname: "Mel", lastname: "Gibson" });
    expect(removedPerson).toEqual({ firstname: "Mel" });
  });

  it("should remove multiple properties", () => {
    const austria = {
      population: 8773000,
      capital: "Vienna",
      size: 83879
    };
    const propertyRemover = new PropertyRemover();
    propertyRemover.addPropertyToBeRemoved("population");
    propertyRemover.addPropertyToBeRemoved("size");
    const onlyVienna = propertyRemover.process(austria);

    expect(onlyVienna).toEqual({ capital: "Vienna" });
  });

  it("should allow registration of multiple properties with one call", () => {
    const austria = {
      population: 8773000,
      capital: "Vienna",
      size: 83879
    };
    const propertyRemover = new PropertyRemover();
    propertyRemover.addPropertyToBeRemoved(["population", "size"]);
    const onlyVienna = propertyRemover.process(austria);

    expect(onlyVienna).toEqual({ capital: "Vienna" });
  });

  it("should be able to be used on multiple objects", () => {
    const austria = {
      population: 8773000,
      capital: "Vienna",
      size: 83879
    };

    const germany = {
      population: 82790000,
      capital: "Berlin",
      size: 357386
    };

    const propertyRemover = new PropertyRemover();
    propertyRemover.addPropertyToBeRemoved(["population", "size"]);
    const onlyVienna = propertyRemover.process(austria);
    const onlyBerlin = propertyRemover.process(germany);

    expect(onlyVienna).toEqual({ capital: "Vienna" });
    expect(onlyBerlin).toEqual({ capital: "Berlin" });
  });

  it("should remove nested properties", () => {
    const deepNested = { a: { b: { c: { d: { e: { f: "deep" } } } } } };
    const propertyRemover = new PropertyRemover();
    propertyRemover.addPropertyToBeRemoved("a.b.c.d.e");
    const reducedNested = propertyRemover.process(deepNested);

    expect(reducedNested).toEqual({ a: { b: { c: { d: {} } } } });
  });

  it("should remove multiple nested propertes", () => {
    const variant = {
      level1a: {
        level2a: 5,
        level2b: {
          level3a: { foo: "bar" },
          level3b: 5
        }
      },
      level1b: "hello"
    };

    const propertyRemover = new PropertyRemover();
    propertyRemover.addPropertyToBeRemoved("level1a.level2b.level3a");
    propertyRemover.addPropertyToBeRemoved("level1a.level2b.level3b");
    const reducedNested = propertyRemover.process(variant);

    expect(reducedNested).toEqual({
      level1a: { level2a: 5, level2b: {} },
      level1b: "hello"
    });
  });

  it("should throw an exception if it cannot find a property", () => {
    const propertyRemover = new PropertyRemover();
    propertyRemover.addPropertyToBeRemoved("bar");
    expect(() => propertyRemover.process({ foo: "bar" })).toThrowError();
  });
});
