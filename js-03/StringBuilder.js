class StringBuilder{
    constructor(){
        this.finalString="";
    }
    append(value){
        return this.finalString+=value;
    }
    toString(){
        return this.finalString;
    }
}
module.exports={StringBuilder};