
//resolve 
// let promise=new Promise((resolve,reject)=>{
// resolve("succesful")
// })
// promise.then((res)=>console.log(res))
// //reject
// let promise=new Promise((resolve,reject)=>{
//     reject("failed to execute")
//     })
//     promise.catch((res)=>console.log(res))

//#both resolve and reject can not be executed at the same time

////////////////// if we want to make it to run in  a synchronous manner
// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     let a=true
//     if(a){
//         resolve("sucessfully executed")
//     }
//     else
//     reject("failed to execute")
//     },2000)
// })
// promise.then((res)=>console.log(res))
// .then(()=>console.log("done"))
// .then(()=>console.log("done done done"))
// .catch((res)=>console.log(res))

// //console.log("done")
// //console.log("done done done!!")

////////////////////////use of then,catch and finally/////////////////////////
// let something=new Promise((resolve,reject)=>{
//     let some=true
//     setTimeout(()=>{
//     if(some){
//         resolve("you are just  18")
//     }
//         else{
//         reject("you are just a kid")
//         }
//         })
//     })
//     something.then((res)=>console.log(res))
//     .then(()=>console.log("you can vote"))
//     .catch((res)=>console.log(res))
//     console.log("you are senior citizen")
    

//**************************use of all********************//
let p1=Promise.resolve("all are fruits")
let p2=new Promise((resolve,rejected)=>{
resolve("fruits are sweet")
})
p3=new Promise((resolve,rejected)=>{

    setTimeout(()=>{rejected("some fruits are sour in nature")
    },2000)
})
Promise.all([p1,p2,p3]).then((results)=>console.log(results))
                       .catch((res)=>console.log(res))