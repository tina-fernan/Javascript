const { List } = require("./List");

describe(`
List is a class that allows us to
add and get values from.`, () => {
  it("should behave like a normal list", () => {
    const list = new List();
    list.add(1);
    list.add(3);

    expect(list.get(1)).toEqual(3);
  });

  it("should be able to count the elements", () => {
    const list = new List();
    list.add("hallo");
    list.add("allerseits");
    list.add("wie gehts?");

    expect(list.count()).toEqual(3);
  });

  it("should allow to set the position when using add", () => {
    const list = new List();
    list.add(1);
    list.add(2, 1);
    list.add(3, 1);
    list.add(4, 0);

    expect(list.toArray()).toEqual([4, 1, 3, 2]);
  });

  it("should not return the original array", () => {
    const list = new List();

    [1, 2, 3, 4, 5].forEach(number => list.add(number));
    list.toArray().pop();

    expect(list.toArray()).toHaveLength(5);
  });
});
