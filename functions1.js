//function definition
// function greet(){
//     console.log("Good Morning")
//}
//calling a function
// function greet(){
//     console.log("Good morning")
// }
// greet()


 /////////////////////////////////////////////////////////////////
 /////passing the parameter and argument
//  function greet(name,age){
//     console.log(`hii  myself ${name},i am ${age} years old`)
//  }
//  greet("kanika",23)

//////passing multiple values
// function greet(name,age){
//          console.log(`hii  myself ${name},i am ${age} years old`)
//       }
//       greet("kanika",23)
//       greet("dipti",23)
//       greet("kirti",25)
//       greet("jyoti")

/////////////////////////////////////////////////////////////
//ex=2 function with multiple parameter
// function displaydetail(name,age,city){

//     let out=`hello,my name is ${name},I am ${age} years old i am from ${city}`
//     console.log(out)

// }
// displaydetail("kanika",23,"delhi")

/////////////////////
// function displaydetail(name,age,city="delhi"){

//         let out=`hello,my name is ${name},I am ${age} years old i am from ${city}`
//         console.log(out)
    
//     }
//      displaydetail("kanika",23,"mumbai")
//      displaydetail("dipti",32)
//      displaydetail("ritika",24,"kolkata")

//////////////////////////////////////////////////
// function printAll(num1,num2,num3,num4){
//     console.log(`argument 1 is ${num1} `)
//     console.log(`argument 2 is ${num2}`)
//     console.log(`argument 3 is ${num3}`)
//     console.log(`argument 4 is ${num4}`)
// }
// printAll(22,33,44,55,66)

//////////////////////use of arguement keyword
// //argument keyword
// function printALL(){
//     console.log(arguments)
// }
// printALL(44,33,22,11,44,55,66,77)

//////types of function
/////function declaration
// function greet(){
//     console.log("hello world")
// }
// greet()

//////anonymous function
// (function (num1,num2){
//     let out=num1+num2
// console.log(out)
// })(55,67)

//ex=2
///self invoking function
// (function (num1){
//     let out=num1*num1
//     console.log(out)
// })(11)

/////////////////////////////function expression
// let sum=function(num1,num2){
// let out=num1+num2
// console.log(out)
// }
// sum(44,33)
// sum(22,33)
// sum(33,33)

//ex=2
// let square=function(num1){
//     let out=num1*num1
//     console.log(out)
// }
// square(2)
// square(4)
// square(5)
