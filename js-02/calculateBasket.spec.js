const { calculateBasket } = require("./calculateBasket");

describe("basketCalculator", () => {
  it("should calculate the total of a basket with products as an array", () => {
    const basket = [
      {
        product: "apple",
        amount: 4,
        price: 0.25
      },
      {
        product: "peach",
        amount: 5,
        price: 0.24
      },
      {
        product: "bread",
        amount: 2,
        price: 1.2
      }
    ];

    expect(calculateBasket(basket)).toBe(4.6);
  });

  it("should calculate the total of a basket with products as nested objects", () => {
    const basket = {
      milk: { amount: 2, price: 0.75 },
      chocolate: { amount: 7, price: 1.25 },
      cerials: { amount: 1, price: 2.86 }
    };

    expect(calculateBasket(basket)).toBe(13.11);
  });
});
