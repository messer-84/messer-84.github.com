import React, {Component} from 'react';

class Task_c_7_3 extends Component {
	constructor() {
		super();
		this.state = {
			items: [
				{text: 'lorem ipsum', active: false, value: ''},
				{text: 'lorem ipsum', active: false, value: ''},
				{text: 'lorem ipsum', active: false, value: ''},
				{text: 'lorem ipsum', active: false, value: ''},
			],
		};
	}

	activeInput = index => {
		const items = [...this.state.items];

		if (!items[index].active) {
			items[index].active = !items[index].active;
			this.setState({
				items,
			});
		}
	};

	updateValue = (e, index) => {
		const items = [...this.state.items];
		items[index].value = e.target.value;

		this.setState({
			items,
		});
	};

	updateText = (e, index) => {
		const items = [...this.state.items];
		items[index].checked = !items[index].checked;
		items[index].text = e.target.value || items[index].text;
		items[index].active = !items[index].active;
		items[index].value = '';

		this.setState({
			items,
		});
	};

	render() {
		const {items} = this.state;
		const list = items.map((item, index) => {
			return (
					<li key={index} onClick={() => this.activeInput(index)}>
						{item.text}
						<input
								className={item.active ? '' : 'disable'}
								type="text"
								value={item.value}
								onChange={e => this.updateValue(e, index)}
								onBlur={e => {
									this.updateText(e, index);
								}}
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

export default Task_c_7_3;
