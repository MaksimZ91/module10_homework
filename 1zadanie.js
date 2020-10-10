//Модуль 10 первая задача
let setNum=prompt("Ведите значение: ");
if (typeof +setNum!="number"||isNaN(setNum))
    alert("Упс, кажется, вы ошиблись")
else if  (setNum===null){}
else  (setNum%2===0?alert("чет"):alert("не чет"))