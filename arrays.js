//++++++++++++++++++++++++++++++++how to create an array
//++++++++++++method1
//let country=Array()
//console.log(country)

//+++++++++++++method2
//let country=[]
//console.log(country)

//+++++++++++++++++++++++++++++creating array with homogeneous data
// let fruits=["grapes","apple","banana","orange"]
// console.log(fruits)
// console.log(typeof(fruits))

//+++++++++++++++++++++++++++++creating array with heterogenous data
// let array=['india',2.2,23,true,undefined,null,[]]
// console.log(array)
// console.log(typeof(array))

//++++++++++++++++++++++++++++++++++how to check the length of an array
// let country=['india','japan','america','nz']
// console.log(country.length)

//++++++++++++++++++++++++++++how to convert the string into array
//+++++++split method
//let name="disha"
//console.log(name.split())

//++++++++++++++++++++++how to convert every character of the string into element of the array
//let name="disha"
//console.log(name.split(""))

//let fruits="apple"
//console.log(fruits.split())
//console.log(fruits.split(""))

//let country="india"
//countryarray=country.split('')
//console.log(countryarray[2])
//console.log(country[2])


// let country="india"
// countryarray=country.split('')
// console.log(countryarray[2])
// console.log(country[2])
// console.log('array==',countryarray)
// console.log('string==',country)

//+++++++++++++++++++++how to find the  index value of element and how to change the element in string using their index value
// let colour="green"
//  let colourarray=colour.split('')

// colourarray[2]="d"
// colour[2]="t"
//  console.log(colour[4])
//  console.log(colour[4])

// console.log('string=',colour)
// console.log('array=',colourarray)

//array of empty elements
//let number=[]
//console.log(number)

//let number=Array(4)
//console.log(number)


/////////////////fillmethod
//let number=Array(4).fill('123')
//console.log(number)

// let number=Array(5).fill("12345")
// number[20]="1111111"
// console.log(number)

//excess the particular element
//let number=Array(2).fill(10)
//console.log(number[1])


//let number=Array(2).fill(10)
//console.log(number[20])

//////////////////concate method
// let number1=[7,7,7,7]
// let number2=[8,8,8,8]
// let output=number1+number2
// console.log(output)

// let num1=[1,1,1]
// let num2=[2,2,2,]
// let output=num1.concat(num2)
// console.log(output)
// console.log(num1)
// console.log(num2)

//+++++++++++++++++++++++++++++++++++POP METHOD
// let number1=[2,2,2,]
// let number2=[3,3,3]
// let output=number1.concat(number2)

// console.log('output array:before pop=',output)
// output.pop()
// console.log('output array:after pop=',output)


//++++++++++++++++++++++++++++++++++++++++SHIFT METHOD
// let number1=[2,2,2,]
// let number2=[3,3,3]
// let output=number1.concat(number2)

// console.log('output Array : before shift=',output);
// output.shift()
// output.shift()
// output.shift()
// console.log('output Array : after shift=',output);

//++++++++++++++++++++++++++++++++++++++++++PUSH METHOD

// let number1=[2,2,2,]
// let number2=[3,3,3]
// let output=number1.concat(number2)

// console.log('outputarray:beforepush=',output)


// output.push(6)
// output.push(7)
// output.push(8)

// console.log('outputarray:afterpush=',output)


//+++++++++++++++++++++++++++++++++++++++++UNSHIFT METHOD
// let number1=[2,2,2,]
// let number2=[3,3,3]
// let output=number1.concat(number2)

// console.log('outputarray:beforeunshift=',output)
// output.unshift(9)
// output.unshift(10)
// output.unshift(11)
// console.log('outputarray:afterunshift=',output)

//  let number1=[3,3,3,]
//  let number2=[4,4,4,]
//  let output=number1.concat(number2)
//  console.log('outputarray:beforeunshift=',output)
//  output.unshift(11)
//  output.unshift(22)

//  console.log('outputarray:afterunshift=',output)

//+++++++++++++++++++++++++++++++++++++++++slice method
// let number1=[2,3,4]
// let number2=[5,6,7]
// let output=number1.concat(number2)
// console.log('outputarray:beforeslice=',output)

//  output.slice()

// console.log('outputarray:afterslice=',output2)

// let number1=[2,3,4]
// let number2=[6,6,6]
// let output=number1.concat(number2)
// console.log('output array:before',output)

//  let output2=output.slice(0,3)

//console.log('output array:after slice',output2)


//++++++++++++++++++++++++++++++++++++++++++splice method
// let num1=[4,5,8]
// let num2=[54,55,56]
// let out=num1.concat(num2)
// console.log('out array:before splice=',out)
// let out2=out.splice(15,4)
// console.log('outpur array:after splice=',out2)

// let num1=[4,5,8]
// let num2=[54,55,56]
// let out=num1.concat(num2)
// console.log('out array:before splice=',out)
// let out2=out.splice(3,4)
// console.log('outpur array:after splice=',out2)

////to add and remove the element using splice method
// let num1=[1,2,3]
// let num2=[4,5,6]
// let output=num1.concat(num2)
// //console.log(output)


// console.log('outputarray:beforeslice',output)
//  let output2=output.splice(2,1)
// console.log('outputarray:beforeslice',output2)





//++++++++++++++++++++++++++++++++++++++++join method
//  let num=[1,6,7,8,7]
//  console.log(num.join())
//  console.log(num)
  
//  //to remove the comma,
//   let alpha=['a','b','c','d']
//  console.log(alpha)
//  let out=alpha.join('')
//  console.log(alpha.join(''))
//  console.log(alpha.lastIndexOf('c'))
