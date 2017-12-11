import React, {Component} from 'react';

import AnswerList from './AnswerList';

/*
 *

 *
 * */


class Task_h_9_6 extends Component {
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
         indexVisibleQuestion: 0,
         testEnd: false
      };
   }

  componentDidMount() {
    const test = this.state.test.map((item) => {
      item.checked = false;
      return item;
    });
    this.setState({
      test
    });
  }

   checkTest = e => {
     e.preventDefault();
     const test = this.state.test.map((item) => {
       item.resultItem = item.checkedAnswer === item.right;
       return item;
     });
     this.setState({
       test,
       testEnd: true

     });
   };


   updateAnswer = (e) => {
     const name = parseInt(e.target.name);
     const value = parseInt(e.target.value);
     const newTest = this.state.test.map((item, index) => {
       if (index === name) {
         item.checkedAnswer = value;
       }
       return item;
     });


     this.setState({
       test: newTest
     });
   };

   updateIndexVisibleQuestion = (index, type) => {
      const indexNow = this.state.indexVisibleQuestion;
      let newIndex;
      if (type === 'next') {
         newIndex = indexNow + 1;
      }
      else if (type === 'prev') {
         newIndex = indexNow - 1;
      }
      this.setState({
         indexVisibleQuestion: newIndex
      });
   };


   render() {

      const {test, indexVisibleQuestion, testEnd} = this.state;
      const isNotFirstItem = indexVisibleQuestion > 0;
      const isNotLastItem = indexVisibleQuestion < test.length - 1;
      const isLastItem = indexVisibleQuestion === test.length - 1;

      const list = test.map((item, index) => {
         if (index === indexVisibleQuestion && !testEnd) {
            return (
               <div key={index}>
                  <h3>{item.question}</h3>
                  <AnswerList answers={item.answers} index={index} updateAnswer={this.updateAnswer} group={item}/>
                  <div>
                     <br/>
                     {isNotFirstItem && <button onClick={() => {
                        this.updateIndexVisibleQuestion(index, 'prev')
                     }}>Назад</button>}
                     {isNotLastItem && <button onClick={() => {
                        this.updateIndexVisibleQuestion(index, 'next')
                     }}>Вперед</button>}
                  </div>
               </div>
            );
         }
         else if (testEnd) {
            const resultItem = item.resultItem || false;
            const rightAnswerValue = test[index].answers[test[index].right];
           const checkedAnswerValue = test[index].answers[item.checkedAnswer];
            const rightAnswerText = '. Правильно!';
            const wrongAnswerText = `. Не правильно! Правильный ответ " ${checkedAnswerValue} "`;


            const cssClass = resultItem ? 'good' : 'bad';
            const resultText = resultItem ? rightAnswerText : wrongAnswerText;
            return (
               <div key={index}>
                  <h3 className={cssClass}>{item.question}</h3>
                  <AnswerList answers={item.answers} index={index} updateAnswer={this.updateAnswer} group={item}/>
                  {testEnd &&
                  <div className={cssClass}>
                     <b>Ваш ответ - {rightAnswerValue} {resultText}</b>
                  </div>}
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
               <br/>
               {isLastItem && <button>Проверить ответы</button>}
            </form>
         </div>
      );
   }
}

export default Task_h_9_6;
