function pipe(functions){
    return functions.reduce((accumlator,currentFunction) =>
    currentFunction(accumlator),0);
}

module.exports={pipe};