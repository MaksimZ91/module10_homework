//Модуль 10  задача 5

let arr=[88,78,51,23,45]
console.log(arr.length)
let result = arr.map(function (item,index){
    return item*3
})
result.forEach(element => console.log(element));

//for (let i=0.; i< result.length; i++){
//console.log(result[i]);}