//Модуль 10 зачада 7
let chet=0
let nechet=0
let arr3 =[2,0,4,6,3,NaN,null, "дом",3,4,undefined]
    for (let i=0; i<arr3.length; i++)
        if (typeof arr3[i]==="number"&&!isNaN(arr3[i])){
            arr3[i] % 2 === 0 ? chet++ : nechet++
            if (arr3[i]===0)
                console.log(arr3[i])
        }
       console.log (chet)
    console.log(nechet)