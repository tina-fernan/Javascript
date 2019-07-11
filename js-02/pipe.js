function pipe(functions){
    return functions.reduce((accumlator,currentFunction) =>
    currentFunction(accumlator),0);
}

// function pipe(functions){
//     if(functions.lenght===0){
//         return 0;
//     }else{
//         const firstFn=functions[0];
//         const formerValue=firstFn();
//         for(let i=1; i<functions.lenght;i++){
//             let fn =functions[i];
//             formerValue=fn(formerValue);
//         }
//         return formerValue;
//     }
// }
module.exports={pipe};