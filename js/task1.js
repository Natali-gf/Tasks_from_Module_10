// Задание 1
console.log('Задание 1')
// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

// Если это число, то вывести в консоль чётное оно или нечётное.

// Если передано не число, выведите: «Упс, кажется, вы ошиблись».

// NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.



//!Над этим заданием я работала дольше всего, так как оно мне кажется не совсем корректно сформулировано или в принципе не до конца продумано:

//! --- п1. Если делать всё в чёткой последовательности как написано, то получается либо лишняя проверка "typeof x == 'number'" либо просто не учитываются значения, когда пользователь:
//! - нажал на кнопку "отмена" (null);
//! - или нажал на кнопку "ок" оставив при этом пустую строку;
//! - или напечатал пробел/ы;
//! В этих случаях мы будем получать некорректный результат (вы ввели число 0, оно чётное) Возможно случаев больше, это те которые я сходу же словила.

//* - Я сделала программу, которая работает учитывая вышеописанное, но отклонившись немного от последовательности действий описанных в задании.
//* - Также я написала решение (решение 2) которое полностью следует последовательности действий описаных в задании, но не исключает ошибки описанные в п.1.

//? Решение 1
console.log('Решение 1')

let value = prompt('Введите значение');

checkValue();
function checkValue() {
	let error = 'Вы не ввели значение';
	if (typeof value !== 'string'){
		return console.log(error);
	};
	value = value.replace(/ /g,'');
	if (value === ''){
		return console.log(error);
	} else {
		value = +value;
		if (isNaN(value)) {
			console.log("Упс, кажется, вы ошиблись");
		} else if (value % 2 === 0) {
			console.log(`Вы ввели ${value}, это число четное`);
		} else {
			console.log(`Вы ввели ${value}, это число нечетное`);
		};
	};
}


//? Решение 2

console.log('Решение 2')

let number = +prompt('Введите значение');

if (typeof number != 'number' || isNaN(number)) {
	console.log("Упс, кажется, вы ошиблись");
} else if (number % 2 === 0) {
	console.log(`Вы ввели ${number}, это число четное`);
} else {
	console.log(`Вы ввели ${number}, это число нечетное`);
}

