class Observable {

    constructor() {
        this.array = [];

    }
    add(number) {
        this.array.push(number);
    }
    subscribe(fn) {
        let subscribtion=this.array.map(number=>fn(number));
        this.array=[];
        return subscribtion;
    //     const subscribtion = [];
    //     for (let index = 0; index < this.array.length; index++) {
    //         const element = this.array[index];
    //         const elementFunction = fn(element);
    //         subscribtion.push(elementFunction);
    //     }
    //     this.array = [];
    //     return subscribtion;
     }
}
module.exports = { Observable };