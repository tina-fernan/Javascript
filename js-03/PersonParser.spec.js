const { PersonParser } = require("./PersonParser");

describe("PersonParser should take a string (csv) and parse it to a list of people", () => {
  it("should parse 4 lines", () => {
    const csv = `
Irene,Kummer,female\n
Sebastian,Traxler,male\n
Johann,Leopold,male\n
Sigrid,Mauerbach,female\n
Agnes,Tragschitz,female
    `;

    const people = new PersonParser().parse(csv);
    const [irene, sebastian, johann, sigrid, agnes] = people;

    expect(people).toHaveLength(5);
    expect(irene).toMatchObject({
      firstname: "Irene",
      lastname: "Kummer",
      gender: "female"
    });
    expect(sebastian).toMatchObject({
      firstname: "Sebastian",
      lastname: "Traxler",
      gender: "male"
    });
    expect(johann).toMatchObject({
      firstname: "Johann",
      lastname: "Leopold",
      gender: "male"
    });
    expect(sigrid).toMatchObject({
      firstname: "Sigrid",
      lastname: "Mauerbach",
      gender: "female"
    });
    expect(agnes).toMatchObject({
      firstname: "Agnes",
      lastname: "Tragschitz",
      gender: "female"
    });
  });
});
