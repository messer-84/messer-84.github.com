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
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state.notes,
      value: '',
    });
  }

  addNote(e) {
    e.preventDefault();

    const notes = this.state.notes.length ? [...this.state.notes] : [];
    const datetime = new Date();
    const hours = datetime.getHours();
    const minutes = datetime.getMinutes() + 1;
    const seconds = datetime.getSeconds();
    const date = `${hours}:${minutes}:${seconds}`;

    notes.push({
      text: this.state.value,
      datetime: date,
      visibleEditField: false
    });

    this.setState({
      notes,
      value: ''
    })
  }

  updateTextValue = (e, index) => {
    const notes = [...this.state.notes];
    const finalNotes = notes.map((note, noteIndex) => {
      if (index === noteIndex) {
        note.text = e.target.value;
      }
      return note;
    });

    this.setState({
      notes: finalNotes
    });

  };

  updateMainValue = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  editNote = (e, index) => {
    const notes = [...this.state.notes];
    const finalNotes = notes.map((note, noteIndex) => {
      if (index === noteIndex) {
        note.text = e.target.value;
      }
      return note;
    });

    this.setState({
      notes: finalNotes
    });


  };

  showEditNote = (index) => {
    const notes = [...this.state.notes];
    notes.map((note, noteIndex) => {
      if (index === noteIndex) {
        note.visibleEditField = !note.visibleEditField;
      }
    });
    this.setState({
      notes
    });
  };

  removeNote = (index) => {
    const notes = [...this.state.notes];
    notes.splice(index, 1);
    this.setState({
      notes
    });
  };

  render() {
    const {notes, value} = this.state;
    const list = notes ? notes.map((item, index) => {
          return (
              <div key={index} data={index}>
                <h3>Заметка №{index + 1}</h3>
                <div>Добавлено: {item.datetime}</div>
                { !item.visibleEditField && <div>{item.text}</div> }
                { item.visibleEditField &&
                <div className="editBlock">
											<textarea
                          onChange={(e) => this.updateTextValue(e, index)}
                          name="note" cols="30" rows="10"
                          value={item.text}
                      />
                  <div>
                    <button onClick={() => {
                      this.showEditNote(index)
                    }}>Submit
                    </button>
                    <button onClick={() => {
                      this.showEditNote(index)
                    }}>Cancel
                    </button>

                  </div>
                  <br />
                </div>}
                <div>
                  <button disabled={item.visibleEditField} onClick={() => {
                    this.showEditNote(index)
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
                onChange={e => this.updateMainValue(e)}
                name="note" cols="30" rows="10" value={value} />
              <div>

                <button disabled={value === ''}>Add note</button>
              </div>
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
