////return keyword=output from the function


///*******with one return statement
// function add(a,b){
//     let output=a+b
//     return output
// }
//  let sum=add(22,33)
// console.log(sum)

/////////////another example////////
// function sum(num1,num2,num3){
//     let out=num1+num2+num3
//     return out

// }
// let numbers=sum(33,44,55)
// console.log(numbers)

//////**********///////
// function add(num1,num2){
//     let out=num1+num2
//     //console.log(out)
//     return "hello"

// }
//  let sum=add(34,65)
//  console.log(sum)

 //###### return statement will print whatever we return that will decide the output of the function
 //if we dont return anything than it will give undefined
 //if we use anything after return statement than it will not be executed and it will give undefined


 ////////another concept
//  function add(a,b){
//     let out=a+b
//     console.log(out)
//     return 77777
//  }
//  let sum=add(22,3)
//  console.log(sum)

// //return with multiple values
// function squareAndCube(num){
//    let sqr=num**2
//    let cube=num**3
//    let mul=num*7
//    let mult=num*9
//    return [sqr,cube,mul,mult]
// }
// console.log(squareAndCube(2))
//###### if we want to print multiple values than we have to use array

////other concept
// let a=22
// function increament(){
//    a++
// }
// increament()
// increament()
// //increament()
// console.log(increament())
// console.log(a)

///******************************SCOPE**********
// let x=55
 
// {
//    let y=60

// }
// console.log(x)
//console.log(y)
//### y is not defined because it is not accessible outside the block

//var scope
// var x=37
// {
//    var a=30
// }
// console.log(x)
// console.log(a)

////////////////////////////
// let x=5
// {
//    let y=10
//    let x=44
//    //console.log(x)
//    //console.log(y)
// }
// //console.log(y)
// console.log(x)

////////////////////////var 
//  var x=10

//  {
//     var x=22
//     console.log(x)
//    //console.log(y)
//  }
// var x=26
//  console.log(x)
// //    console.log(y)

/////////////////////////////////////////////global and window
// window.x=10
// function some()
// {
//    let x=33
//    console.log(x)
//    console.log(window.x)
// }  
// some()
// console.log(x)
// //#####in case of Nodejs we use global
// //in case of browser we use window

// /////////////////////////////////////////////////
//nested function
function outerFunction(a,b){
  
   console.log(a*b)
   function innerFunction(c,d){
      console.log(c+d)
     
   }
   return innerFunction
}
outerFunction(2,6)(3,3)
