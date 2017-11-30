import React, {Component} from 'react';

/*
 *
 *
 *  Дан массив с работниками. У каждого работника есть имя, фамилия и зарплата. Выведите этих работников на экран в виде таблицы.
 *  Для каждого работника сделайте чекбокс, который изначально будет отмечен.
 *  Под таблицей выведите сумму зарплат тех работников, для которых чекбокс отмечен.
 *
 * */

class Task_c_10 extends Component {
	constructor() {
		super();
		this.state = {
			tasks: [
				{name: 'Task-1'},
				{name: 'Task-2'},
				{name: 'Task-3'},
				{name: 'Task-4'},
				{name: 'Task-5'},
				{name: 'Task-6'},
			],
		};
	}

	componentDidMount() {
		const tasks = [...this.state.tasks];
		const newTasks = tasks.map((item, index) => {
			item.editing = false;
			item.status = false;
			item.nameValue = item.name;
			return item;
		});

		this.setState({
			tasks: newTasks,
			creating: false,
			createValue: ''
		});
	}

	showEditField = (id) => {
		const tasks = [...this.state.tasks];
		tasks[id].editing = !tasks[id].editing;

		this.setState({tasks});
	};

	hideEditField = (id) => {
		const tasks = [...this.state.tasks];
		tasks[id].editing = !tasks[id].editing;
		tasks[id].nameValue = tasks[id].name;

		this.setState({tasks});
	};

	updateNameValue = (e, id) => {
		const tasks = [...this.state.tasks];
		tasks[id].nameValue = e.target.value;

		this.setState({tasks});
	};
	updateName = (id) => {
		const tasks = [...this.state.tasks];
		tasks[id].name = tasks[id].nameValue;
		tasks[id].editing = !tasks[id].editing;

		this.setState({tasks});
	};

	updateStatus = (id) => {
		const tasks = [...this.state.tasks];
		tasks[id].status = !tasks[id].status;

		this.setState({tasks});
	};

	removeTask = (id) => {
		const tasks = [...this.state.tasks];
		tasks.splice(id, 1);

		this.setState({tasks});

	};

	showCreateField() {
		this.setState({
			creating: !this.state.creating
		});
	};

	updateCreateValue = (e) => {
		this.setState({
			createValue: e.target.value
		});
	};

	cancelCreateTask = () => {
		this.setState({
			creating: !this.state.creating,
			createValue: ''
		});
	};

	addTask() {
		const tasks = [...this.state.tasks];
		const newTask = {
			name: this.state.createValue
		};
		tasks.push(newTask);


		this.setState({
			tasks,
			creating: !this.state.creating,
			createValue: ''
		});
	}

	render() {
		const {tasks} = this.state;
		const tasksList = tasks.map((item, index) => {
			return <div key={index} className={item.status ? 'done' : 'new'}>
				<span>
					{item.status && <input
							type="checkbox"
							id={index}
							checked={item.status}
							onClick={() => this.updateStatus(index)}
					/>}
					<label htmlFor={index}>{item.name}</label>
				</span>
				<span>
					{item.editing && <span>
						<input
								type="text"
								value={item.nameValue}
								onChange={(e) => {
									this.updateNameValue(e, index)
								}}
						/>
						<button onClick={() => {
							this.updateName(index)
						}}>Submit</button>
					</span>

					}
				</span>
				{!item.editing && <button onClick={() => {
					this.showEditField(index)
				}}>Edit</button>}
				{item.editing && <button
						onClick={() => {
							this.hideEditField(index)
						}}>Cancel</button>
				}

				<button onClick={() => {
					this.removeTask(index)
				}}>Remove
				</button>
			</div>
		});
		return (
				<div className="app">
					<div>{this.state.creating && <div>
						<input
								type="text"
								value={this.state.createValue}
								onChange={(e) => {
									this.updateCreateValue(e)
								}}
						/>
						<button onClick={() => this.cancelCreateTask()}>Cancel</button>
						<button onClick={() => this.addTask()}>Submit</button>
					</div>}
						{!this.state.creating && <button
								onClick={() => {
									this.showCreateField()
								}}
						>
							Add Task
						</button>}
					</div>
					<br />
					{tasksList}
				</div>
		);
	}
}

export default Task_c_10;
