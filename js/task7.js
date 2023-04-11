// Задание 7
console.log('Задание 7')
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


//? Solution

let arr = [6, '7', 'f', '6', 7, null, 0, NaN, undefined, -0, 4, '3'];

let numEven = 0;
let numOdd = 0;
let numNull = 0;

for (let i = 0; i<arr.length; i++){
	if	(arr[i] % 2 == 0) {
		if (arr[i] == 0) {
			numNull++
		} else {
			numEven++;
		}
	} else if (arr[i] % 2 != 0){
		if (isNaN(arr[i])){
		} else {
		numOdd++;
		}
	}
};

console.log(`Колличество чётных элементов в массиве - ${numEven}`);
console.log(`Колличество нечётных элементов в массиве - ${numOdd}`);
console.log(`Колличество нулевых элементов в массиве - ${numNull}`);


//? Solution with foreach

let arr2 = [6, '7', 'f', '6', 7, null, 0, NaN, undefined, -0, 4, '3'];

let num2Even = 0;
let num2Odd = 0;
let num2Null = 0;

arr2.forEach(i =>{
	if	(i % 2 == 0) {
		if (i == 0) {
			num2Null++
		} else {
			num2Even++;
		}
	} else if (i % 2 != 0){
		if (isNaN(i)){
		} else {
		num2Odd++;
		}
	}
});

console.log(`Колличество чётных элементов в массиве - ${num2Even}`);
console.log(`Колличество нечётных элементов в массиве - ${num2Odd}`);
console.log(`Колличество нулевых элементов в массиве - ${num2Null}`);
