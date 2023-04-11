// Задание 5
console.log('Задание 5')
// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.


//? Solution

let showArr = [1,2,3,4,5];
console.log(showArr.length)

showArr.forEach(function(item, index, array){
	console.log(item)
})


//? shorter version

showArr.forEach(element => {
	console.log(element)
});


//? Solution with for

for (let i = 0; i < showArr.length; i++) {
	console.log(showArr[i])
}
