function factorial(num){
    var fact = 1;
    for(i=num;i>=1;i--){
        fact = fact * i;
    }
    return fact;
}

module.exports={factorial};