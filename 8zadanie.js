//Модуль 10 зачада 8
let firstMap= new Map()
firstMap.set("синий", "дом");
firstMap.set(3, "яблоко");
firstMap.set(false, "ложь")
firstMap.forEach(function(value, key) {
    console.log(`«Ключ — ${key}, значение — ${value}».`);
});