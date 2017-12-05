import React, {Component} from 'react';

/*
 *
 *  Дан следующий массив с вопросами и вариантами ответов:
 Реализуйте текст с вопросами и вариантами ответов.
 Каждый вопрос должен быть в своем абзаце,
 а под ним - 5 радиокнопочек, с помощью которых можно выбрать один из ответов.
 Если ответ правильный - вопрос должен покраситься в зеленый цвет,
 а если неправильный - в красный.
 *
 * */

class Task_h_9_3 extends Component {
  constructor() {
    super();
    this.state = {
      test: [
        {
          question: '1. Какая функция используется, если нужно спросить пользователя о чем-то и принять ответ "да" или "нет"?',
          answers: [
            'prompt()',
            'eval()',
            'confirm()',
            'alert()',
            'console.log()',
          ],
          right: 0,
        },
        {
          question: '2. Что вернет вызов функции parseInt("08")?',
          answers: [
            '8',
            'NaN',
            'Зависит от движка браузера',
            '0',
            '08',
          ],
          right: 0,
        },
        {
          question: '3. Когда у элемента гарантированно совпадают offsetHeight и clientHeight?',
          answers: [
            'Всегда',
            'Когда у элемента нет border.',
            'Когда у элемента нет border и padding.',
            'Когда у элемента нет border, padding и margin.',
            'Когда у элемента нет прокрутки.',
          ],
          right: 1,
        },

      ],
      showPart: 0,
      testEnd: false
    };
  }

  componentDidMount() {
    const test = this.state.test.map((item) => {
      item.answerValue = '';
      item.showResult = false;
      item.hasAnswer = false;
      return item;
    });
    this.setState({
      test
    });
  }

  checkTest = (e) => {
    e.preventDefault();
    const test = this.state.test.map((item) => {
      item.showResult = true;
      item.resultItem = item.answerValue - 1 === item.right;
      return item;
    });
    this.setState({
      test
    });

  };


  updateAnswer = (e, index) => {
    const test = [...this.state.test];
    test[index].answerValue = e.target.value;

    this.setState({
      test
    });
  };

  updateShowPart = (index,type) => {
    const partIndexNow = this.state.showPart;
    const partIndex = type === 'prev' ? this.state.showPart - 1 :
  };


  render() {
    const {test} = this.state;
    var fieldId = 0;
    const list = test.map((item, index) => {
      const resultItem = item.resultItem || false;
      const rightAnswerText = '. Правильно';
      const wrongAnswerText = '. Не правильно! Правильный ответ ' + parseInt(item.right + 1);
      if (index === this.state.showPart) {
        return (
            <div key={index}>
              <h3 className={item.resultTest}>{item.question}</h3>
              <ol>
                {item.answers.map((subItem, subIndex) => {
                  fieldId++;
                  return <li key={subIndex}>{subItem}</li>;
                })}
              </ol>
              <input
                  type="text"
                  value={item.answerValue || ''}
                  onChange={(e) => {
                    this.updateAnswer(e, index)
                  }}/>
              {item.showResult &&
              <div className={resultItem ? 'good' : 'bad'}>
                <b>Ваш ответ - {item.answerValue} {resultItem ? rightAnswerText : wrongAnswerText}</b>
              </div>}
              <div>
                {this.state.showPart > 0 && <button onClick={() => {
                  this.updateShowPart(index, 'prev')
                }}>Назад</button>}
                {this.state.showPart < this.state.test.length - 1 && <button onClick={() => {
                  this.updateShowPart(index, 'next')
                }}>Вперед</button>}
              </div>

            </div>
        );
      }

    });
    return (
        <div className="app">
          <form action="#" onSubmit={(e) => this.checkTest(e)}>
            <div>
              {list}
            </div>
            {this.state.testEnd && <button>Проверить ответы</button>}
          </form>

        </div>
    );
  }
}

export default Task_h_9_3;
