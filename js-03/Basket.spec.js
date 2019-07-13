const { Basket, Product } = require("./Basket");

describe("Basket is a class where we can put products. It can also calculate the total price", () => {
  it("should calc with one product", () => {
    const basket = new Basket();
    basket.put(2, new Product("milk", 0.78));

    expect(basket.getTotal()).toBe(1.56);
  });

  it("should calc with multiple products", () => {
    const basket = new Basket();
    const apple = new Product("apple", 0.3);
    const bread = new Product("bread", 2.5);
    const water = new Product("water", 0.5);
    basket.put(2, apple);
    basket.put(3, bread);
    basket.put(3, water);

    expect(basket.getTotal()).toBe(9.6);
  });

  it("should calc an empty basket", () => {
    expect(new Basket().getTotal()).toBe(0);
  });
});
