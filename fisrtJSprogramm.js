//Модуль 10 первая задача
/*let setNum=prompt("Ведите значение: ");
if (typeof +setNum!="number"||isNaN(setNum))
    alert("Упс, кажется, вы ошиблись")
else if  (setNum===null){}
else  (setNum%2===0?alert("чет"):alert("не чет"))*/


// Модуль 10 вторая задача
/*a=5
b="Добрый день!:)"
c=true
d=[1,2,3]
i=null
let f
X= ;
switch (typeof X) {
   case "number":
         console.log("X-число");
         break
   case X= "string":
         console.log("X-строка");
         break
   case X= "boolean":
        console.log("X-логика");
        break
   default:
  console.log('«Тип x не определён»');
}*/

 //Модуль 10  задача 3

/*let str="Hello"
let reverse=str.split("").reverse().join("");
console.log (str)*/

// Модуль 10  задача 4
/*let  min =0;
let max =100;
let Z=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(Z);*/


// Модуль 10  задача 5

/*let arr=[88,78,51,23,45]
console.log(arr.length)
let result = arr.map(function (item,index){
    return item*3
})
result.forEach(element => console.log(element));*/
//for (let i=0.; i< result.length; i++){
 //console.log(result[i]);}

// Модуль 10  задача 6
/*let arr1=[2,7,2,15]
let arr2=[2,2,2,2]
let bool=arr1.every(elem => elem === arr1[0])
console.log(bool)*/

//Модуль 10 зачада 7
/*let chet=0
let nechet=0
let arr3 =[2,0,4,6,3,NaN,null, "дом",3,4,undefined]
    for (let i=0; i<arr3.length; i++)
        if (typeof arr3[i]==="number"&&!isNaN(arr3[i])){
            arr3[i] % 2 === 0 ? chet++ : nechet++
            if (arr3[i]===0)
                console.log(arr3[i])
        }
       console.log (chet)
    console.log(nechet)*/

//Модуль 10 зачада 8
/*let firstMap= new Map()
firstMap.set("синий", "дом");
firstMap.set(3, "яблоко");
firstMap.set(false, "ложь")
firstMap.forEach(function(value, key) {
    console.log(`«Ключ — ${key}, значение — ${value}».`);
});*/