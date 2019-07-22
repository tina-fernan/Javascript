const { Person } = require("./Person");

describe(`
Person has the properties firstname, lastname and the method
introduce().
`, () => {
  it("should not overwrite introduce", () => {
    const augustin = new Person("Ferdinand", "Augustin");
    expect(augustin.introduce()).toBe("My name is Ferdinand Augustin.");
  });

  it("should overwrite introduce", () => {
    class Musician extends Person {
      constructor(firstname, lastname, instrument) {
        super(firstname, lastname);
        this.instrument = instrument;
      }

      introduce() {
        return `${super.introduce()} I play the ${this.instrument}`;
      }
    }
    const buchbinder = new Musician("Rudolf", "Buchbinder", "piano");

    expect(buchbinder.introduce()).toBe(
      "My name is Rudolf Buchbinder. I play the piano"
    );
  });
});
