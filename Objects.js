// Объект Car 

let car = {
 color: 'Чёрный',
 carPower: 1600
}

car.color = 'Зелёный'

car.power = function(){
  console.log(car.carPower)
}

// Склад, яблоки, груши

let apples = 4;
let pears = 7;

function addToWarehouse(a,b){
  let warehouse = a + b;
  return warehouse;
}

// Терминал

let terminal = {
  name: 'Vladislav'
};

let userName = terminal.name;

function checkName() {
  
  let askName = prompt('Ваше имя?', '');
  
  if(askName == userName){
     return alert('Привет' + ' ' + userName)
  } else {
    return alert('Нет такого имени')
  }
}
  
// Вычисление типа аргумента

function checkArg(arg){
  return console.log(typeof arg);
}


// Определение простых чисел

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return true;
}

