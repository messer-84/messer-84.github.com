import React, {Component} from 'react';

class Task_c_3_6 extends Component {
	constructor(){
		super();
		this.state = {
			names: ['Коля', 'Вася', 'Петя']
		}
	}
	render() {
		const list = this.state.names.map((item, i) =>{
			return <li key={i}>{item}</li>;
		});
		return (
				<div>
					<ul>
						{list}
					</ul>
				</div>
		);
	}
}

export default Task_c_3_6;
