(function() {
  const btn = document.querySelector('.btnTransform');
  const blockEdit = document.querySelector('.blockForEdit');
  const btnGetList = document.querySelector('.btnGetList');

  function transformText() {
    const text = document.querySelector('#taPaste').value;
    const textArray = text.split(' ');
    let str = '';
    textArray.forEach(elem => {
      str += `<div class="word">${elem} <span class="del">x</span></div>`;
    });
    blockEdit.innerHTML = str;
  }

  (function deleteWord() {
    document.addEventListener('click', e => {
      if (e.target.classList.contains('del')) {
        blockEdit.removeChild(e.target.parentElement);
        getListForCopy();
      }
    });
  })();

  btn.addEventListener('click', transformText);

  function getListForCopy() {
    const wordList = document.querySelectorAll('.word');
    const listHold = document.querySelector('.blockForCopy');
    listHold.innerHTML = '';
    [...wordList].forEach(elem => {
      let span = elem.querySelector('.del');
      let newElem = elem.textContent.slice(0, -1);

      listHold.innerHTML += `<div class="inpWord"><input class="inpCopy" type='text' value="${newElem}"/></div>`;
    });
    select();
  }

  function select() {
    document.addEventListener('click', e => {
      console.log(e.target.classList.contains('inpCopy'));

      if (e.target.classList.contains('inpCopy')) {
        e.target.select();
      }
    });
  }
})();
