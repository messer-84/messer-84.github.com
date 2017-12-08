import React, {Component} from 'react';

import AnswerList from './AnswerList';

/*
 *

 *
 * */


class Task_h_9_4 extends Component {
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
         item.answerValue = '';
         return item;
      });
      this.setState({
         test
      });
   }

   checkTest = e => {
      e.preventDefault();
      const test = this.state.test.map((item) => {
         item.resultItem = item.answerValue - 1 === item.right;
         return item;
      });
      this.setState({
         test,
         testEnd: true
      });
   };


   updateAnswer = (e, index) => {
      const test = [...this.state.test];
      test[index].answerValue = e.target.value;

      this.setState({
         test
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
                  <AnswerList answers={item.answers}/>
                  <input
                     type="text"
                     value={item.answerValue || ''}
                     onChange={e => {
                        this.updateAnswer(e, index)
                     }}/>
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
            const rightAnswerText = '. Правильно';
            const wrongAnswerText = '. Не правильно! Правильный ответ ' + parseInt(item.right + 1);
            const cssClass = resultItem ? 'good' : 'bad';
            const resultText = resultItem ? rightAnswerText : wrongAnswerText;
            return (
               <div key={index}>
                  <h3 className={cssClass}>{item.question}</h3>
                  <AnswerList answers={item.answers}/>
                  {testEnd &&
                  <div className={cssClass}>
                     <b>Ваш ответ - {item.answerValue} {resultText}</b>
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

export default Task_h_9_4;
