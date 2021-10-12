// Сложение, умножение, деление трех примитивных типов данных(строка, логика, число)

let str = 'hello';
let bool = false;
let num = 3;

let addition = str + bool;
let multiply = str * bool;
let divide = str / bool;

let addition2 = str + num;
let multiply2 = str * num;
let divide2 = str / num;

let addition3 = num + bool;
let multiply3 = num * bool;
let divide3 = num / bool;


// Явные преобразования
// 1. В строку
bool = String(bool);
num = String(num);

// 2. В число
bool = Number(true);
str = Number(str);

// 3. В логику
str = Boolean(str);
num = Boolean(num);
