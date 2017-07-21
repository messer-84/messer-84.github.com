/*
 Алгоритмы !
 TASK 0
 Вам дано предложение, верните массив из слов,
 которые длинее чем средняя длина всех слов.
 Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
 solution(["This is a sample string"]) expected ["This" "sample" "string"]
 solution(["Some another sample"]) expected ["another" "sample"]
 solution(["Do, do, do, do... do it!"]) expected []
 */


function solution(arr) {
  var newStr = arr.join('').replace(/[^A-Za-z ]/g, "");
  var newArr = newStr.split(' ');
  var sum = 0;
  newArr.forEach(elem => {
    sum += elem.length;
  });
  var average = sum / newArr.length;
  var lastArr = newArr.filter(elem => {
    return elem.length > average;
  });

  console.log(lastArr);


}
console.log('task 0 >>>>>>>>>>>>>>>>>>>>>>');

solution(["This is a, sample string"]); //expected ["This" "sample" "string"]
solution(["Some another sample"]);// expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]);// expected []

/* TASK 1
 Сделайте таблицу 5x5
 При клике на элемент, изменяйте цвет у элемента на красный.
 Но цвет у элемента должен изменяться пропорционально в другой половине квадрата*/

function tableEvent() {
  let tbody = document.querySelector('tbody');
  tbody.addEventListener('click', function (e) {
    var target = e.target;

    if (target.tagName === 'TD') {
      let tr = target.parentNode;
      let firstTR = this.firstElementChild;
      let lastTR = this.lastElementChild;
      //средние ячейки первая и последняя строки
      if (target.cellIndex !== 0 &&
        target.cellIndex !== tr.childElementCount - 1) {

        if (tr.rowIndex === 0) {
          styling(lastTR.children[target.cellIndex]);
        }
        if (tr.rowIndex === this.childElementCount - 1) {
          styling(firstTR.children[target.cellIndex]);
        }

      }

      switch (target) {
        // углы
        case firstTR.firstElementChild:
          styling(lastTR.lastElementChild);
          break;
        case firstTR.lastElementChild:
          styling(lastTR.firstElementChild);
          break;
        case lastTR.firstElementChild:
          styling(firstTR.lastElementChild);
          break;
        case lastTR.lastElementChild:
          styling(firstTR.firstElementChild);
          break;
        //средние ячейки первый и последний столбцы
        case tr.firstElementChild:
          styling(tr.lastElementChild);
          break;
        case tr.lastElementChild:
          styling(tr.firstElementChild);
          break;
      }
    }
  });
  function styling(elem) {
    elem.style.backgroundColor = 'red';
  }
}
console.log('task 1 >>>>>>>>>>>>>>>>>>>>>>');

tableEvent();