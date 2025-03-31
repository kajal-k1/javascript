/////to find maximum and minimum in an array
// let numbers=[22,33,44,55,99]
// let max=numbers[0],min=numbers[0]
// numbers.forEach(el=>{
//     if(el>max){
//         max=el}
//     if(el<min){
// min=el
//     }
// })
// console.log(max)
// console.log(min)

//to remove duplicate in an array
// let arr=[2,2,2,2,2,3]
  
// let numbers=[...new Set(arr)]
// console.log(numbers)

//by filter
let num=[33,44,55,55,55,55]
let aa=num.filter((value,index,array)=> array.indexof(value)===index);
console.log(aa)