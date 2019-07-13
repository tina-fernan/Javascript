const { Observable } = require("./Observable");

describe(`
  An Observable emits values that are processd by a map function. 
  We can also add new value to the observables.`, () => {
  it("should multiply it by 2", () => {
    const observable = new Observable();
    observable.add(5);
    observable.add(10);
    observable.add(15);

    expect(observable.subscribe(number => number * 2)).toEqual([10, 20, 30]);
  });

  it("should remove the values once we called subscribe", () => {
    const observable = new Observable();
    observable.add(10);
    observable.add(5);
    observable.subscribe(number => number);

    observable.add([10, 15]);
    observable.add([5, 3, 1, 0]);
    expect(observable.subscribe(numbers => Math.max(...numbers))).toEqual([
      15,
      5
    ]);
  });
});
