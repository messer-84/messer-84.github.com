import React, {Component} from 'react';

class Task_h_6_7 extends Component {
	constructor() {
		super();
		this.state = {
			options: ['неотмечено', 'отмечено'],
			selectValue: 0,
			isChecked: false
		};
	}

	updateValue = (e) => {
		this.setState({
			selectValue: parseInt(e.target.value),
			isChecked: !this.state.isChecked
		})
	};

	updateCheckbox = (e) => {
   this.setState({
     isChecked: !this.state.isChecked,
		 selectValue:  this.state.isChecked ? 0 : 1
   });
 };

	render() {
		const {selectValue, options, isChecked} = this.state;
		const optionsList = options.map((item, i) => {
			return (
					<option value={i} key={i}>
						{item}
					</option>
			);
		});

		return (
				<div className="app">
					<form action="#">
						<select value={selectValue}
								onChange={ (e) => this.updateValue(e) }
						>
							{optionsList}
						</select>
						<input
								type="checkbox"
								checked={isChecked}
								onChange={e => this.updateCheckbox(e)}
						/>
					</form>
				</div>
		);
	}
}

export default Task_h_6_7;
