// // // const object1=new human();
// // // class human{

// // // }
// // function saymyname(name){
// //     console.log(name);
// // }
// // saymyname("Abhay");
// let greet=function(){
//     console.log("Hello world")
// }
// greet();
// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first=arr[0];
// let ans=first(5,10);
// console.log(ans);

let obj={
    age:25,
    wt:36,
    ht:180,
    greet:()=>{
        console.log("hello world")
    }
}
console.log(obj.age);
obj.greet();