class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    introduce(){
        return `My name is ${this.firstname} ${this.lastname}.`
    }
}
module.exports={Person};