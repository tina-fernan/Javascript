class Person{
constructor(firstname,lastname,date){
this.firstname=firstname;
this.lastname=lastname;
this.father="";
this.mother="";
this.date=date;
this.arrayChild=[];

}
setFather(name){
    return this.father=name;
}
setMother(name){
    return this.mother=name;
}
getParents(){
    return [this.mother,this.father];
}
getFirstname(){
    return this.firstname;
}
getBirthday(){
    return this.date;
}
addChild(name){
    return this.arrayChild.push(name);
}
getSiblings(){
    return this.mother.arrayChild;
}
getChildren(){
    return this.arrayChild.sort((child1,child2)=>child1.getBirthday()-child2.getBirthday());
}
}
module.exports={Person};