// class User {
// 	constructor(name, surname, age) {
// 		this._name = name;
// 		this._surname = surname;
// 		this._age = age;
// 	}
//
// 	// get name(){
// 	// 	return this._name;
// 	// }
// 	//
// 	// get surname(){
// 	// 	return this._surname;
// 	// }
//
//
// 	getName() {
// 		return this._name;
// 	}
//
// 	getSurname() {
// 		return this._surname;
// 	}
//
// 	getFullName() {
// 		return this._name + ' ' + this._surname;
// 	}
//
// 	setAge(age) {
// 		this._age = this._checkAge(age) ? age : undefined;
// 	}
//
// 	_checkAge(age) {
// 		return age > 0 && age < 100;
// 	}
//
// 	getAge() {
// 		return this._age;
// 	}
// }

// const user = new User('Ivan', 'Ivanov');
// user.setAge(20);
// console.log(user.getAge());

// console.log(user.getFullName());
// console.log(user.getName());
// console.log(user.getSurname());
// console.log(user.name, user.surname);

//task

class Worker {
	constructor(name, surname, rate, days) {
		this._name = name;
		this._surname = surname;
		this._rate = rate;
		this._days = days;
	}

	getName() {
		return this._name;
	}

	getSurname() {
		return this._surname;
	}

	getRate() {
		return this._rate;
	}

	setRate(rate) {
		this._rate = rate;
	}

	getDays() {
		return this._days;
	}

	setDays(days) {
		this._days = days
	}

	getSalary() {
		return this.getRate() * this.getDays();
	}
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);

const worker2 = new Worker('Petr', 'Petrov', 15, 20);
const sum = worker.getSalary() + worker2.getSalary();

worker.setDays(40);
console.log(worker.getDays());

//task 4
class MyString {
	reverse(str) {
		return str.split('').reverse().join('');
	}

	ucFirst(str) {
		return str.split('').map((elem, i) => {
			return i === 0 ? elem.toUpperCase() : elem;
		}).join('');
	}
}
var str = new MyString();
console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));


