// Задание 8
console.log('Задание 8')
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.


//? Solution

let primeWorld = new Map ([
	['Mountain-man', 'Tank'],
	['Soul Reaper', 'Support'],
	['Amazon', 'Damage Dealer'],
	['Lord of the rats', 'Controller'],
	['Priestess', 'Healler'],
	['Assassin', 'Killer'],
]);

for (let [heroName, role] of primeWorld){
	console.log(`In the game "Prime World" hero "${heroName}" plays the role of a "${role}"`)
}

//«Ключ = heroName, значение = role»