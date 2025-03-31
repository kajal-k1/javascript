///////////print each element of an array
// let name=["kanika","kirti","kalpi","kajal"]
// function detail(el){
//     console.log(el)
// }
// name.forEach(detail)

/////////////////////////print each element to upper case
// let fruits=["apple","mango","grapes","papaya","orange"]
// function delicious(el,index,array){
//     console.log(el.toUpperCase(),index,array)
// }
// fruits.forEach(delicious)

////////////////////////////////find square of number using callback
// let num=[2,3,4,5,6,78,]
// let callback=(el)=>console.log(el*el)

// num.forEach(callback)
// /////////////////////////////find square of numbers
// let num=[3,4,5,6,7]
// num.forEach((el)=>console.log(el*el))

///////////////using filter
    
let number=[33,44,55,66,77,88]
let out=number.filter(el=>el%2==0)
console.log(out)


//////using map
// let number=[2,3,4,5,6,7,8]
// let out=number.map(el=>(el*13))
// console.log(out)
