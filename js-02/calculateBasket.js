function calculateBasket(basket) {
    const calcFn = getCalcFn(basket);
    return calcFn(basket).reduce((product1, product2) => product1 + product2);
  }
  
  function getCalcFn(basket) {
    if (Array.isArray(basket)) {
      return getPricesForArray;
    } else {
      return getPricesForObject;
    }
  }
  
  function getPricesForArray(basket) {
    return basket.map(product => product.amount * product.price);
  }
  
  function getPricesForObject(basket) {
    return Object.keys(basket).map(key => {
      const product = basket[key];
      return product.amount * product.price;
    });
  }
module.exports={calculateBasket};