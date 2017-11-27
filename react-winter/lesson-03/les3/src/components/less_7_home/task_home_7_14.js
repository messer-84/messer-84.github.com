import React, {Component} from 'react';

/*
 *
 Дан массив с числами. Сделайте так, чтобы каждый элемент этого массива
 записался в свой инпут. С помощью каждого инпута можно поредактировать
 тот элемент массива, который в нем записан. Сделайте так, чтобы под всеми
 инпутами выводилась сумма элементов этого массива.
 *
 * */

class Task_h_7_14 extends Component {
	constructor() {
		super();
		this.state = {
			test: [
				{
					question: '1. Какая функция используется, если нужно спросить пользователя о чем-то и принять ответ "да" или "нет"?',
					answers: [
						'prompt()',
						'eval()',
						'confirm()',
						'alert()',
						'console.log()',
					],
					right: 0,
				},
				{
					question: '2. Что вернет вызов функции parseInt("08")?',
					answers: [
						'8',
						'NaN',
						'Зависит от движка браузера',
						'0',
						'08',
					],
					right: 0,
				},
				{
					question: '3. Когда у элемента гарантированно совпадают offsetHeight и clientHeight?',
					answers: [
						'Всегда',
						'Когда у элемента нет border.',
						'Когда у элемента нет border и padding.',
						'Когда у элемента нет border, padding и margin.',
						'Когда у элемента нет прокрутки.',
					],
					right: 1,
				},

			]
		};
	}

	componentDidMount() {
		const test = this.state.test.map((item, index) => {
			item.checkedAnswer = 0;
			return item;
		});
		this.setState({
			test
		});
	}

	updateValue = (e) => {
		const name = parseInt(e.target.name);
		const value = parseInt(e.target.value);
		const checkedAnswered = this.state.test[name].checkedAnswer;
		const newTest = this.state.test.map((item, index)=>{
			if(index === name){
				console.log('item-name', item.checkedAnswer);

				item.checkedAnswer = value;
			}
			return item;
		});


		this.setState({
			test: newTest
		});

	};

	checkTest = (e) => {
		e.preventDefault();
		const test = this.state.test.map((item, index) => {
			item.resultTest = item.checkedAnswer === item.right;
			return item;
		});
		this.setState({
			test
		});

	};


	render() {
		const {test} = this.state;
		var fieldId = 0;
		const list = test.map((item, index) => {
			return (
					<li key={index}>
						<h3 {item.resultTest && className} >{item.question}</h3>
						<ul>
							{item.answers.map((subItem, subIndex) => {
								fieldId++;
								return <li key={subIndex}>
									<input
											type="radio"
											name={index}
											value={subIndex}
											id={fieldId}
											checked={item.checkedAnswer === subIndex}
											onChange={e => this.updateValue(e)}
									/>
									<label htmlFor={fieldId}>{subItem}</label>
								</li>;
							})}
						</ul>
					</li>
			);
		});
		return (
				<div className="app">
					<form action="#" onSubmit={(e) => this.checkTest(e)}>
						<ul>
							{list}
						</ul>
						<button>Submit</button>
					</form>

				</div>
		);
	}
}

export default Task_h_7_14;
