import React, {Component} from 'react';


/*
 *
 *  Дан массив. Выведите элементы этого массива в виде списка ul.
 *  Сделайте так, чтобы внутри каждой li был чекбокс, по нажатию
 *  на который содержимое li будет перечеркиваться.
 *
 *
 *
 * */

class Task_c_9_2 extends Component {
	constructor() {
		super();
		this.state = {
			user: {
				name: 'Vasya'
			}
		};
	}

	updateUserName = e => {

		this.setState({
			user: {
				name: e.target.value,
				isShowInput: false

			}
		})

	};

	toggleShowingInput = () => {
		this.setState({
			user:{
				isShowInput: !this.state.user.isShowInput
			}
		});
	};

	render() {
		const {name, isShowInput} = this.state.user;


		return (
				<div className="app">
					<p>{name}</p>
					<input type="checkbox" onChange={() => {
						this.toggleShowingInput()
					}} />
					{isShowInput && <input type="text" onChange={(e) => {
						this.updateUserName(e)
					}} />}
				</div>
		);
	}
}

export default Task_c_9_2;
