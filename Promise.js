function sortArray1(a){
    return new Promise((res,rej)=>{
       res(a.sort());
    })
}
function sortArray2(b){
    return new Promise((res,rej)=>{
        res(b.sort());

    })
}
//Get both sorted array then provide the combine result of both
let arr1=[2,1,4,5,6,7];
let arr2=[2,1,4,5,6,7];
Promise.all([sortArray1(arr1),sortArray2(arr2)])
.then(data=>{
    const combine=data.flat();
    console.log(combine);
})
