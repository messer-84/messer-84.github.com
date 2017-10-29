//task 1
// let myArray =["elem-1", "elem-2", "elem-3", "elem-4", "elem-5"];
// const [elem1, elem2, elem3, ...arr] = myArray;

//task 2
// console.log('task-2 ============>');
//вывести предпоследний и последний
// let myArray2 =["elem-1", "elem-2", "elem-3", "elem-4", "elem-5"];
// const [elem21, elem22] = myArray2.reverse();
// console.log(elem21,elem22);
//

//task 3;
// console.log('task-3 ============>');
// let myArray3 =["elem-31", "elem-32"];
// const [,elem32] = myArray3;
// console.log(elem32);

//task 4;
// console.log('task-4 ============>');
// let myArray4 =["elem-1", "elem-2", "elem-3", "elem-4", "elem-5"];
// const[,elem2='bbb', elem3='eee'] = myArray4;

//task 5
// console.log('task-5 ============>');
// const user = {name:'Petr', surname:'Petrov', age: 20};
// const {name,surname,age} = user;
// console.log(name,surname,age);

//task 6
// console.log('task-6 ============>');
// const user = {name:'Petr', surname:'Petrov', age: 20};
// const {name='anonom',surname='anonomov',age='? let'} = user;
// console.log(name,surname,age);

//iterators
//task 7
// console.log('task-7 ============>');
//
// let myArray7 = ['elem-1', 'elem-2', 'elem-3', 'elem-4', 'elem-5'];
// myArray7.forEach(elem=>{
// 	document.write(elem + '<br>');
// });
// for(let elem of myArray7){
// 	document.write(elem + '<br>');
// }
//task 8
// console.log('task-8 ============>');
//
// myArray7.reverse().forEach(elem => {
//   document.write(elem + '<br>');
// });

//task 9
// console.log('task-9 ============>');
// const numArray = [5, 10, 15, 20, 25];
// let result = 0;
// for (let item of numArray) {
// 	result += item;
// }
// let sum = numArray.reduce((a, b) => a + b, 0);
// console.log(sum);
//task 10
// console.log('task-10 ============>');
//
// const str = `Дан объект с насторойками, например, {id: 'elem', color: 'blue', border: '1px solid red', font: '15px Arial'}. Сделайте функцию, которая получает этот объект, извлекает из него все настройки в соответствующие переменные и для элемента с указанным id (в нашем случае это 'elem') ставит заданные CSS свойства. В объекте могут быть только эти ключи, однако, какой-либо ключ (кроме id) может быть не задан - в этом случае пусть возьмутся следующие значения по умолчанию: color: 'blue', border: '1px solid red', font: '15px Arial'`;
// let sum = 0;
// for (let item of str) {
//   if (item === 'о') {
//     sum++;
//   }
// }
//
// console.log(sum);

//functions
console.log('task-11 ============>');

function showUser(name = 'Anonim'){
	document.write('Hello '  + name);
}

showUser();



