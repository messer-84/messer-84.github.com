import React, {Component} from 'react';

/*
 Дан текстареа и кнопка. В текстареа пользователь нашего сайта будет вводить свои заметки.
 После нажатия на кнопку введенный текст должен появится под текстареа в виде блока div.
 Таких заметок может быть много. В каждой заметке должен стоять заголовок (заметка1, заметка2 и так далее),
 время создания заметки (часы, минуты, секунды),
 а также должна быть кнопка 'удалить' и кнопка 'редактировать'.
 * */

class Task_h_7_6 extends Component {
	constructor() {
		super();
		this.state = {
			notes: [],
			value: '',
		};
	}



	addNote(e) {
		e.preventDefault();
		console.log(this.state);

		const notes = this.state.notes.length ? [...this.state.notes] : [];
		const datetime = new Date();
		const hours = datetime.getHours();
		const minutes = datetime.getMinutes() + 1;
		const seconds = datetime.getSeconds();
		const date = `${hours}:${minutes}:${seconds}`;

		notes.push({
			text:this.state.value,
			datetime:date
		});

		this.setState({
			notes,
			value: ''
		})
	}

	updateValue = (e) => {
		this.setState({
			value: e.target.value
		})
	};

	editNote = (e, index) => {
		const notes = [...this.state.notes];

	};

	removeNote = (e, index) => {
		const notes = [...this.state.notes];
		notes.splice(index, 1);
		this.setState({
			notes
		});
	};

	render() {
		console.log(this.state);

		const {notes, value} = this.state;



		const list =  notes ? notes.map((item, index) => {
			return (
					<div key={index}>
						<h3>Заметка №{index + 1}</h3>
						<div>Добавлено: {item.datetime}</div>
						<div>{item.text}</div>
						<div>
							<button onClick={(e) => {
								this.editNote(e, index)
							}}>Редактировать
							</button>
							<button onClick={() => {
								this.removeNote(index)
							}}>Удалить
							</button>
						</div>
					</div>
			);
		}) : null;

		return (
				<div className="app">
					<h1>Task home-7-6</h1>
					<div>
						<form action="#" onSubmit={e => this.addNote(e)}>
						<textarea
								onChange={e => this.updateValue(e)}
								name="note" cols="30" rows="10" value={value} />
							<button>Add note</button>
						</form>

					</div>
					<div>
						{list}
					</div>
				</div>
		);
	}
}

export default Task_h_7_6;
