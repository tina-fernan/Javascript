const isPrime = number => {
    for (let i = 2; i < number; i++) 
        if(number % i === 0){

            return false;
        }

        return number>1;
    }
    module.exports={isPrime};

    // function isPrime(value) {
    //     for (let i = 2; i < value - 1; i++) {
    //       if (value % i === 0) {
    //         return false;
    //       }
    //     }
    //     return true;
    //   }
      