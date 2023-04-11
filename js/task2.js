// Задание 2
console.log('Задание 2')
// Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

// Примечание: в этом задании использовать promt не нужно.


//? Solution

let x = 'example';
let result = typeof x;

switch (result) {
  case 'number':
      console.log('x = number');
      break;
  case 'string':
      console.log('x = string');
      break;
  case 'boolean':
      console.log('x = boolean');
      break;
  default:
      console.log('x is undefined');
}