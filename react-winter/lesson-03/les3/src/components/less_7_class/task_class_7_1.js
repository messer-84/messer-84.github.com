import React, {Component} from 'react';

class Task_c_7_1 extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{text: 'item-1', checked: true},
				{text: 'item-2', checked: false},
				{text: 'item-3', checked: false},
				{text: 'item-4', checked: false},
			],
		};
	}

	updateValue = (index) => {

		const newItems = [...this.state.items];
		const items = newItems.map((item, i) => {
			if(i === index){
				item.checked = !item.checked;
			}
			return item;
		});

		this.setState({
			items
		});
	};

	render() {
		const {items} = this.state;
		const list = items.map((item, index) => {
			return (
					<li
							key={index}
							className={item.checked ? '' : 'notActive'}>
						{item.text}
						<input
								type="checkbox"
								defaultChecked={item.checked}
								onChange={() => this.updateValue(index)}
						/>
					</li>
			);
		});

		return (
				<div className="app">
					{list}
				</div>
		);
	}
}

export default Task_c_7_1;
