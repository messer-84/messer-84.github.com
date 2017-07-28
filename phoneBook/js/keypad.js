class Keypad {
  constructor(options) {
    this.pageName = options.pageName;
    this.navData = options.navData;
    this.arrayKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
    this.app = document.querySelector('.app');
  }

  createTag(tag, parent, mClass) {
    mClass = mClass || false;
    var myTag = document.createElement(tag);
    if (mClass) {
      myTag.className = mClass;
    }
    parent.appendChild(myTag);
    return myTag;
  }

  createNav(parent) {
    const myNav = this.createTag('nav', parent, 'main-nav');
    let navStr = '';
    this.navData.forEach(elem => {
      let linkClassName = elem.linkActive ? 'tab active' : 'tab';
      navStr += `<a href="${elem.href}" class="${linkClassName}">
        <span class="${elem.spanOneClass}" ${elem.spanOneAttr}=${elem.spanOneAttrValue}></span>
        <span class="${elem.spanTwoClass}">${elem.linkText}</span>
      </a> `;
    });
    myNav.innerHTML = navStr;
    return myNav;
  }

  createFooter() {
    const footer = this.createTag('footer', this.app, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    this.createNav(div)
  }

  createNumberHolder(parent) {
    const maskField = '(___)___-____';
    const number = this.createTag('div', parent, 'number');
    number.innerHTML = `<span id="addUser">+user </span><input class="numbers" value=${maskField}><button id="delete">del</button>`;
  }

  createKeypadData(parent) {
    this.arrayKeys.forEach(elem => {
      parent.innerHTML += `<button class="key">${elem}</button>`;
    });
    parent.innerHTML += `<button class="key key-call"><span class="glyphicon glyphicon-earphone" aria-hidden="true">CALL</span></button>`;
  }

  funcCalling(numField) {
    let numBlock = document.querySelector(numField);
    let keypad = document.querySelector('.keypad-holder');


    keypad.addEventListener('click', e => {
      if (e.target.className === 'key') {
        var matrix = numBlock.defaultValue,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = numBlock.value.replace(/\D/g, "");

        def.length >= val.length && (val = def);
        matrix = matrix.replace(/[_\d]/g, function (a) {
          return val.charAt(i++) || "_";
        });

        numBlock.value = matrix;

        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != numBlock.defaultValue ? i++ : i = matrix.indexOf("_");

        this.setCursorPosition(i, numBlock);

        numBlock.value += e.target.textContent;
      }
    });
  }

  funcKeyDown(numField) {
    let numBlock = document.querySelector(numField);
    const addNumberEvent = (e) => {
      var matrix = numBlock.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = numBlock.value.replace(/\D/g, "");

      def.length >= val.length && (val = def);
      matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
      });
      numBlock.value = matrix;
      i = matrix.lastIndexOf(val.substr(-1));
      i < matrix.length && matrix != numBlock.defaultValue ? i++ : i = matrix.indexOf("_");
      this.setCursorPosition(i, numBlock);
    };
    window.addEventListener('keydown', addNumberEvent);
  }

  funcDeleteNumber(numField) {
    let numBlock = document.querySelector(numField);
    var curData = numBlock.value;
    var newData = curData.slice(0, curData.length - 1);
    numBlock.value = newData;
  }

  funcDeleteNumberFromBtn(numField, deleteBtn) {
    let deleteBTN = document.querySelector(deleteBtn);
    deleteBTN.addEventListener('click', e => {
      this.funcDeleteNumber(numField);
    });
  }

  setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos)
    }
    else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  createMaskForNumber() {
    var input = document.querySelector('.numbers');
    const addNumberEvent = (e) => {
      var matrix = e.target.defaultValue,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");

      def.length >= val.length && (val = def);
      matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
      });
      e.target.value = matrix;
      i = matrix.lastIndexOf(val.substr(-1));
      i < matrix.length && matrix != e.target.defaultValue ? i++ : i = matrix.indexOf("_");
      this.setCursorPosition(i, e.target);
    };

    input.addEventListener("input", addNumberEvent, false);

  }

  header() {
    const header = this.createTag('header', this.app, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.innerHTML = `<h2>${this.pageName}</h2>`;
  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    const numberHolder = this.createNumberHolder(div);
    const keypadWrap = this.createTag('div', div, 'keypad-holder');
    const keypadData = this.createKeypadData(keypadWrap);
    const funcCallingInit = this.funcCalling('.numbers');
    const funcDeleteNumbers = this.funcDeleteNumberFromBtn('.numbers', '#delete');
    const funcKeypress = this.funcKeyDown('.numbers');
    const footerHtml = this.createFooter();
    this.createMaskForNumber();

  }

  render() {

    this.header();
    this.main();

  }
}

const
  keypad = new Keypad({
    pageName: 'Keypad', navData: [
      {
        href: 'index.html',
        linkClass: 'tab',
        linkActive: true,
        linkText: 'Contacts',
        spanOneClass: 'glyphicon glyphicon-search',
        spanOneAttr: 'aria-hidden',
        spanOneAttrValue: 'true',
        spanTwoClass: 'tab-text'
      },
      {
        href: 'keypad.html',
        linkClass: 'tab',
        linkActive: false,
        linkText: 'Keypad',
        spanOneClass: 'glyphicon glyphicon-th',
        spanOneAttr: 'aria-hidden',
        spanOneAttrValue: 'true',
        spanTwoClass: 'tab-text'
      },
      {
        href: 'edit-user.html',
        linkClass: 'tab',
        linkActive: false,
        linkText: 'Edit contact',
        spanOneClass: 'glyphicon glyphicon-pencil',
        spanOneAttr: 'aria-hidden',
        spanOneAttrValue: 'true',
        spanTwoClass: 'tab-text'
      },
      {
        href: 'user.html',
        linkClass: 'tab',
        linkActive: false,
        linkText: 'User',
        spanOneClass: 'glyphicon glyphicon-user',
        spanOneAttr: 'aria-hidden',
        spanOneAttrValue: 'true',
        spanTwoClass: 'tab-text'
      },
      {
        href: 'add-user.html',
        linkClass: 'tab',
        linkActive: false,
        linkText: 'Add user',
        spanOneClass: 'glyphicon glyphicon-plus',
        spanOneAttr: 'aria-hidden',
        spanOneAttrValue: 'true',
        spanTwoClass: 'tab-text'
      },
    ]
  });
keypad
  .render();