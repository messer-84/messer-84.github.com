import React, {Component} from 'react';

class Task_h_3_7 extends Component {
	constructor() {
		super();
		this.state = {
			names: ["Коля","Вася","Петя"],
			text: ''
		}
	}
	showList =()=>{
		const list = this.state.names.map((item, i) => {
			return <li key={i}>{item}</li>;
		});

		this.setState({
			text: <ul>{list}</ul>
		})
	};

	render() {

		return (
				<div>
					{this.state.text}
					<button onClick={this.showList}>Показать список</button>
				</div>
		);
	}
}

export default Task_h_3_7;
