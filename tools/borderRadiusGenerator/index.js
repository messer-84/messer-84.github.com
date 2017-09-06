(function borderGenerator() {
  const divBlock = document.querySelector('.block');
  const inputRangeArray = document.querySelectorAll('.inpRange');

  function setCornerValue(inputValue, inputId) {
    const cornersArray = document.querySelectorAll('.corner');

    [...cornersArray].forEach(corner => {
      if (corner.getAttribute('data-corner') === inputId) {
        corner.textContent = inputValue + 'px';
      }
    });
  }
  function setDataToCopy() {
    const copyTextElement = document.querySelector('.dataValue');
    let copyText = '';
    [...inputRangeArray].forEach(inputRange => {
      copyText += inputRange.value + 'px ';
    });

    copyTextElement.textContent = copyText.slice(0, -1) + ';';
    console.log(copyTextElement.textContent);
  }

  function transferRangeValue() {
    [...inputRangeArray].forEach(inputRange => {
      inputRange.addEventListener('input', e => {
        const parentRow = inputRange.parentNode.parentNode;
        const inputText = parentRow.querySelector('.inpText');
        const thisInputValue = e.target.value;
        inputText.value = thisInputValue;
        divBlock.style[inputRange.id] = thisInputValue + 'px';
        setCornerValue(thisInputValue, inputRange.id);
        setDataToCopy();
      });
    });
  }
  function transferTextValue() {
    const maxValue = 150;
    const inpTextArray = document.querySelectorAll('.inpText');

    [...inpTextArray].forEach(inputText => {
      inputText.addEventListener('input', e => {
        const thisInput = e.target;
        const parentRow = thisInput.parentNode.parentNode;
        const inputRange = parentRow.querySelector('.inpRange');

        thisInput.value = thisInput.value.replace(/\D/, '');
        thisInput.value = thisInput.value > maxValue ? 10 : thisInput.value;
        inputRange.value = thisInput.value === '' ? 0 : thisInput.value;

        divBlock.style[inputRange.id] = thisInput.value + 'px';
        setCornerValue(thisInput.value, inputRange.id);
      });
    });
  }
  transferTextValue();
  transferRangeValue();
})();
