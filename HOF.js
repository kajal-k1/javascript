//********************************************************
////////////////////set time out
// let some="Good morning!!!"
// console.log(name)
// function greet(){
//     console.log("kajal")
// }setTimeout(greet,3000)

///////////////////set  interval
// let name="kanika"
// console.log(name)
// function greet(some){
//     console.log("how are you " + some + "!!!")
// }
// setInterval( greet,3000,"what are you doing")



//******************************************************
//use of for each
//+++++to convert all these in lower case
//  let letters=['K','D','F','R','U','D','F','O']

//  let letters_lower=[]

//  letters.forEach((el,index,array)=>letters.tolowercase)

//+++++to print each element of an array
// let name=["kajal","kanika","kirti","tashu","tanisha"]
// let callback=(el)=>console.log(el)
// name.forEach(callback)


//++++++convert into lower case without creating an array
// let name=["k","A","J","A","L"]
// let callback=(el)=>console.log(el.toLowerCase())
// name.forEach(callback)

///+++++++using functions
// let games=["volleyball","football","basketball","cricket"]
// function gamz(el,i,arr){
//     console.log(el.toUpperCase(),i,arr)
// }
// games.forEach(gamz)

// ///**********************************************************
// let name=["k","A","J","A","L"]
// let name_lower=[]
// name.forEach((el,index,array)=>name_lower.push(el.toLowerCase()))
// console.log(name_lower)
 //***********************************************
 //square a number without using a for loop
//  let num=[4,6,7,8,3,4,9]
//  num.forEach((el)=>console.log(el*el))

//cube a number without using a for loop
// let num=[2,45,6,7,3]
// num.forEach((el)=>console.log(el*el*el))

//multiply a number by 2
// let num =[2,3,4,56,7]
// num.forEach((el)=>console.log(el*2))

//**************************************************
//map
//write the the multiple of 6 using map
// let number=[4,5,6,7,8,9,3,2]
// let out=number.map(el=>el*6)
// console.log(out)
//

//square of number
// let number=[3,4,5,6,7]
// let out=number.map((el)=>el*el)
// console.log(out)

//************************************************************
//filter
//to find wheather the number is even or not

// let num=[2,4,5,6,7,8,599,88]
// let out=num.filter((el)=>el%2==0)
// console.log(out)

//to find that the number is odd
// let num=[3,5,7,9,4,5,7]
// let out=num.filter((el)=>el%2!=0)
// console.log(out)

///to find the number is odd
// let num=[3,4,5,6,7,55]
// let out=num.filter((el)=>el%2==1)
// console.log(out) 

//******************************************************
//reduce
// let num=[2,3,4,5,6,7]
// let out=num.reduce((acc,el)=>acc+el,200)
// console.log(out)

// //performing operations from left to right
// let num =[2,3,4,5]
// let out=num.reduce((acc,el)=>acc-el,100)
// console.log(out)

//String
//let str=['k','a','j','a','l']
//let out=str.reduce((acc,el)=>acc+el)
//console.log(out)  

//reduce right in string
// let str=["fffff","gggg","hhhh","iiiii"]
// let out=str.reduceRight((acc,el)=>acc+el)
// console.log(out)


//******************************************************
///use of some and every
//some
// let number=[22,33,45,66,77,11,20]
// let out=number.some(el=>el<=20)
// console.log(out)

///every
// let num=[22,33,4,5,67,,2]
// let out=num.every(el=>el<=18)
// console.log(out)

// //function 
// let num=[13,44,52,61,33]
//  let checkNumber=function(el){
//      return el>=18

// }
//  let out=num.every(checkNumber)
//  console.log(out)

// ///flatten the array
//two dimensional array
//let matrix=[[2,3,4,5],[6,4,5,7,9],[2,3,4,5]]
//console.log(matrix.flat())

/////////
// let matrix=[[44,55,66,77],[33,[77,66],55],[55,99]]
// console.log(matrix.flat(2))

//**************************************************
//map
// let matrix=[[44,55,66,77],[33,[77,66],55],[55,99]]
// console.log(matrix.flatMap(el_Array=>el_Array.map(el=>el-2)))

//////////
//let matrix=[[22,33,44],[44,66],[77,88]]
//console.log(matrix.flatMap(el_Array=>el_Array) )

//*****************************************************
//find
// //for finding the first element divisible by 5
// let numbers=[1,2,3,4,5,6,7,8,9,33,44,55,6,77,88,99]
// let out=numbers.find(el=>el%5==0)
// console.log(out)

//to find all element divisble by 5
// let numbers=[1,2,3,4,5,6,7,8,9,33,44,55,6,77,88,99]
// let out=numbers.filter(el=>el%5==0)
// console.log(out)

//if you want to find the index of the first element divisible by 5
//let numbers=[4,5,6,7,8,9,55,6]
//let out=numbers.findIndex(el=>el%5==0)
//console.log(out)

//************************************************
//in ascending order
// let numb=[9,8,7,6,5,4,3,2,1]
// let out=numb.sort((a,b)=>(a-b))
// console.log(out)

// // in descending order
// let data=[55,66,77,22,55,33,73]
// let out=data.sort((a,b)=>(b-a))
// console.log(out)