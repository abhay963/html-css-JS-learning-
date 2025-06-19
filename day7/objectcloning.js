let src={
    age:12,
    wt:68,
    ht:180
};
// let dest={...src};
// // console.log(obj)
// // obj.color="white";
// // console.log(obj);
let src2={
    value:101,
    name:"Abhay"
}
let dest=Object.assign({},src,src2);
console.log("src:",src);
console.log("dest",dest);
