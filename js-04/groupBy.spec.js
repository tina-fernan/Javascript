const { groupBy } = require("./groupBy");

describe(`
groupBy gets passed a group function that it applies
to each element of an Array. That function returns a
value which should be used as group key.
groupBy should return an object where the keys
are the group key and the value, the elements assigned
to that group.
`, () => {
  it("should group after country", () => {
    const cities = [
      { name: "Vienna", country: "Austria" },
      { name: "Beijing", country: "China" },
      { name: "München", country: "Germany" },
      { name: "Xi'an", country: "China" },
      { name: "Mannheim", country: "Germany" },
      { name: "Lübeck", country: "Germany" }
    ];

    expect(groupBy(cities, city => city.country.toLowerCase())).toEqual({
      austria: [{ name: "Vienna", country: "Austria" }],
      china: [
        { name: "Beijing", country: "China" },
        { name: "Xi'an", country: "China" }
      ],
      germany: [
        { name: "München", country: "Germany" },
        { name: "Mannheim", country: "Germany" },
        { name: "Lübeck", country: "Germany" }
      ]
    });
  });

  it("should group after gender", () => {
    const actors = [
      { name: "Harrison Ford", gender: "male" },
      { name: "Sandra Bullock", gender: "female" },
      { name: "Tom Cruise", gender: "male" },
      { name: "Halle Berry", gender: "female" }
    ];

    expect(
      groupBy(actors, actor => (actor.gender === "male" ? "man" : "woman"))
    ).toEqual({
      man: [
        { name: "Harrison Ford", gender: "male" },
        { name: "Tom Cruise", gender: "male" }
      ],
      woman: [
        { name: "Sandra Bullock", gender: "female" },
        { name: "Halle Berry", gender: "female" }
      ]
    });
  });

  it("should group by odd or even numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    expect(
      groupBy(numbers, number => (number % 2 === 0 ? "even" : "odd"))
    ).toEqual({
      even: [2, 4, 6],
      odd: [1, 3, 5, 7]
    });
  });
});
