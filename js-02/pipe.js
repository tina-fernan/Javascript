// function pipe(functions){
//     return functions.reduce((accumlator,currentFunction) =>
//     currentFunction(accumlator),0);
// }

module.exports={pipe};

function pipe(functions){
    if(functions.length===0){
        return 0;
    }else{
        const firstFn=functions[0];
        let formerValue=firstFn();

        for (let index = 1; index < functions.length; index++) {
            const fn= functions[index];
            formerValue =fn(formerValue);
            
        }

        return formerValue;
    }
}