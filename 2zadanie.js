// Модуль 10 вторая задача
a=5
b="Добрый день!:)"
c=true
d=[1,2,3]
i=null
let f
let x = 2;
switch (typeof x) {
   case "number":
         console.log("X-число");
         break
   case "string":
         console.log("X-строка");
         break
   case "boolean":
        console.log("X-логика");
        break
   default:
  console.log('«Тип x не определён»');
}

// Всё верно, но снова есть замечания:
// 1. Всегда используйте ключевые слова при объявлении переменных: let или const.
// 2. Строка X= в директиве case - лишняя