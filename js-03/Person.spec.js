const { Person } = require("./Person");

describe("Person can be used to give us some info regarding family relationship", () => {
  it("should know the parents, with mother first", () => {
    const fritz = new Person("Fritz", "Huber");
    const gernot = new Person("Gernot", "Huber");
    const maria = new Person("Maria", "Huber");

    fritz.setFather(gernot);
    fritz.setMother(maria);

    expect(fritz.getParents().map(person => person.getFirstname())).toEqual([
      "Maria",
      "Gernot"
    ]);
  });

  it("should know the siblings, sorted by age and oldest first", () => {
    const fritz = new Person("Fritz", "Huber", new Date(1991, 5, 23));
    const anja = new Person("Anja", "Huber", new Date(1995, 2, 12));
    const daniel = new Person("Daniel", "Huber", new Date(1996, 11, 31));
    const maria = new Person("Maria", "Huber");

    fritz.setMother(maria);
    maria.addChild(anja);
    maria.addChild(daniel);

    expect(fritz.getSiblings().map(person => person.getFirstname())).toEqual([
      "Anja",
      "Daniel"
    ]);
  });

  it("should know the children, sorted by age and oldest first", () => {
    const fritz = new Person("Fritz", "Huber", new Date(1991, 5, 23));
    const anja = new Person("Anja", "Huber", new Date(1995, 2, 12));
    const daniel = new Person("Daniel", "Huber", new Date(1996, 11, 31));

    const maria = new Person("Maria", "Huber");
    maria.addChild(fritz);
    maria.addChild(daniel);
    maria.addChild(anja);

    expect(maria.getChildren().map(person => person.getFirstname())).toEqual([
      "Fritz",
      "Anja",
      "Daniel"
    ]);
  });
});
