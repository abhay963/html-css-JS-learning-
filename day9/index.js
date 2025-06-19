// let firstpromise=new Promise((resolve,reject)=>{
// console.log("Abhay");
// reject("internal error");
// })
let promise1=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise fulfilled");
    }
    else{
        reject("Promise Rejected");
    }
});

promise1.then((message)=>{
    console.log("first msg:" + message);
    return "promise fulfilled second  message";
})