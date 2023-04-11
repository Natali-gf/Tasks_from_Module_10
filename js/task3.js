// Задание 3
console.log('Задание 3')
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


//? Solution

let word = 'Hello';

let wordReverse = word.split('') .reverse().join('');
console.log (wordReverse);

//полная цепочка действий (для себя)
// let wordArray = word.split('');
// let wordReverseArray = wordArray.reverse();
// let wordReverse = wordReverseArray.join('');
// let console.log (wordReverse)
