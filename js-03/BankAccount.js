class BankAccount{
    constructor(){

        this.putmoney=0;
        this.outmoney=0;
        
    
    }
    withdraw(number){
        return this.outmoney+=number;
    }
    deposit(number){
        return this.putmoney+=number;
    }
    getBalance(){
        return this.putmoney - this.outmoney;
    }

}
module.exports={BankAccount};
