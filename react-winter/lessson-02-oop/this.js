const elem = document.getElementById('elem');
//
// function func() {
// 	console.log(this.value);
//
// }
//
// func.call(elem);

//task 2


function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);

}

func.call(elem, 'Ivanov', 'Ivan');

//task 3

func.apply(elem, ['Ivanov', 'Ivan']);

//task 4

func = func.bind(elem);
func('Petrov', 'Petr');