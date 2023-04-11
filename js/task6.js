// Задание 6
console.log('Задание 6')
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


//? Solution

let arrElements = [7, 7, 7, 7, 7]

for (let i = arrElements.length - 1; i>0; i--){
	if (arrElements[i] !== arrElements[i-1]){
		console.log('false - не все элементы массива одинаковые');
		break;
	} else if (i == 1){
		console.log('true - все элементы массива одинаковые')
	}
};


//? Another solution

let a=0;

for (let i = arrElements.length - 1; i>0; i--){
	if (arrElements[i] != arrElements[i-1]){
		break;
	} else if (arrElements[i] == arrElements[i-1]){
		a++;
	}
};

arrElements.length == a + 1 ?
console.log('true - все элементы массива одинаковые') :
console.log('false - не все элементы массива одинаковые');




