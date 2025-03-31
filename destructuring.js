//**************************************************
///rest operator in case of arrays
//let [aa,bb,...cc]=[22,33,44,55,66,100,200,300]
//console.log(aa)
//console.log(bb)
//console.log(cc)
//console.log( `cc==>`,cc)
  
//********************************************************
//spread operator in case of arrays
//let x=[3,4,5,6,7]
//let y=["a","b","c","d"]
//let z=[...x,...y,66,77,86]
// console.log(z)

//let x=[66,77,88]
//let y=x
//x.push(555)
//console.log(y)
//console.log(x)

// x=["aaaa"]
// y.push(000)
// console.log(x)
// console.log(y)
// let x=[3,4,5]
// let y=[...x]
// y.push(111)
// x.push(555)
// console.log(x)
// console.log(y)

//*********************************************
//  operators in function
// let some=(...args)=>{
// console.log(args)
// }
// some(33,22)

//****************************************************
//operators in objects
let fruits={
    "name":"grapes",
"color": "green",
"nature":"sour in nature",
}
let{name,color,nature}=fruits
console.log(nature,name,color)