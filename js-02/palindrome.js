const isPalindrome = number => {
    let numberString=number.toString()
    .split('').reverse().join('');

    if(number === numberString){
        return "toBeTruthy";
     
    }

return "toBeFalsy";
    
}

module.exports={isPalindrome};