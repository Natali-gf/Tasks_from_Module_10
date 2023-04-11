// Задание 4
console.log('Задание 4')
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.


//? Solution

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1));
};

console.log(getRandomNumber(0, 100))
