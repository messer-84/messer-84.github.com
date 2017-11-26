import React, {Component} from 'react';

/*
 *
Дан инпут. В него вводится строка. Сделайте так,
 чтобы если длина введенной строки от 4 до 9 символов -
  граница инпута была зеленой, в противном случае - красной.
   Инпут должен проверять свое содержимое по мере ввода.
 *
 * */

class Task_h_7_9 extends Component {
	constructor() {
		super();
		this.state = {
			value:''
		};
	}



	updateValue = (e) => {


		this.setState({
			value: e.target.value
		});
	};


	render() {
		const {value} = this.state;
		const typeClass = value.length <= 3 || value.length > 9 ? 'bad' : 'good';
		return (
				<div className="app">
					<input
							className={typeClass}
							type="text"
							value={value}
							onChange={e => this.updateValue(e)} />
				</div>
		);
	}
}

export default Task_h_7_9;
