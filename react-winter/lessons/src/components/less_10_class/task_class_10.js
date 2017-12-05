import React, {Component} from 'react';

import TaskRow from './TaskRow';


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
		const newTasks = tasks.map((item) => {
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
	editTask = (id) => {
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

	addTask = () => {
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
	};

	render() {
		const {tasks, creating, createValue} = this.state;
		const tasksList = tasks.map((item, index) => {
			return <TaskRow key={index}
					name={item.name}
					status={item.status}
					id={index}
					editing={item.editing}
					nameValue={item.nameValue}
					updateNameValue={this.updateNameValue}
					updateStatus={this.updateStatus}
					updateName={this.editTask}
					removeTask={this.removeTask}
					showEditField={this.showEditField}
					hideEditField={this.hideEditField}

			/>
		});
		return (
				<div className="app">
					<h1>TO DO</h1>
					<div>{creating && <div>
						<input
								type="text"
								value={createValue}
								onChange={(e) => {
									this.updateCreateValue(e)
								}}
						/>
						<button onClick={this.cancelCreateTask}>Cancel</button>
						<button onClick={this.addTask}>Submit</button>
					</div>}
						{!creating && <button
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
