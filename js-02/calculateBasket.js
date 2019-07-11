const calculateBasket = basket => {
    let sum = 0;
   
    for(const product in basket){
        sum += basket[product]["amount"] * basket[product]["price"];
        // basket.getNestedValue("milk","amont","price");
    }
    return sum;    
}
module.exports={calculateBasket};