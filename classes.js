class Games{
constructor(colour,players){
     this.clrs=colour
    this.plrs=players
    console.log(this.clrs,this.plrs)
}
getDetails(){
   
    console.log(`this object has ${this.clrs}  colour and ${this.plrs} in team`) 
}



} 
let  football=new Games("red",11) 
let volleyball=new Games("black",10) 
//console.log(football)
//console.log(football.clrs)
//console.log(volleyball.plrs)
football.getDetails()
volleyball.getDetails()

//*football is an object of games
//*games is a template  from which we creating the object football
//*we can create multiple object from the  same class
//*clrs are not accessible bcz it belongs to a local variable  and it does not belong to a particular object
//to make it accessible we have to use this keyword