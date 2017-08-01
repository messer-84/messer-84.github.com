class Keypad {
  constructor(options) {
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

  createFooter() {
    const footer = this.createTag('footer', this.app, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    div.innerHTML = `<nav class="main-nav">
    				<a href="index.html" class="tab active">
    					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
    					<span class="tab-text">Contacts</span>
    				</a>
    				<a href="keypad.html" class="tab">
    					<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
    					<span class="tab-text">Keypad</span>
    				</a>
    				<a href="add-user.html" class="tab">
    					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
    					<span class="tab-text">Add user</span>
    				</a></nav>`;
  }

  createNumberHolder(parent) {
    const keypadWrap = this.createTag('div', parent, 'keypad-holder');

    keypadWrap.innerHTML = `<div class="number"><span id="addUser" class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
    				<span class="numbers"></span>
    				<span id="deleteNumber" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span></div>
    				<div class="keypad-holder"><button class="key">1</button><button class="key">2</button><button class="key">3</button><button class="key">4</button><button class="key">5</button><button class="key">6</button><button class="key">7</button><button class="key">8</button><button class="key">9</button><button class="key">*</button><button class="key">0</button><button class="key">#</button><button class="key key-call"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button></div>`;
  }

  transformPhoneNumber(element, char) {
    if (element.textContent.length < 14) {
      if (!element.textContent) {
        element.textContent += '(' + char;
      } else if (element.textContent.length === 4) {
        element.textContent += ') ' + char;
      } else if (element.textContent.length === 9) {
        element.textContent += '-' + char;
      }
      else {
        element.textContent += char;
      }
    }
  }

  funcCalling() {
    let numBlock = document.querySelector('.numbers');
    let keypad = document.querySelector('.keypad-holder');
    keypad.addEventListener('click', e => {
      if (e.target.className === 'key') {
        this.transformPhoneNumber(numBlock, e.target.textContent);
      }
    });
  }

  funcKeyDown() {
    let numBlock = document.querySelector('.numbers');
    const addNumberEvent = (e) => {
      if (+e.key >= 0 || e.key === '*' || e.key === '#') {
        this.transformPhoneNumber(numBlock, e.key);
      }
      if (e.key === 'Backspace') {
        this.funcDeleteNumber();
      }
    };
    window.addEventListener('keyup', addNumberEvent);
  }

  funcDeleteNumber() {
    let numBlock = document.querySelector('.numbers');
    var curData = numBlock.textContent;
    var newData = curData.slice(0, curData.length - 1);
    numBlock.textContent = newData;
  }

  funcDeleteNumberFromBtn() {
    let deleteBTN = document.querySelector('#deleteNumber');
    deleteBTN.addEventListener('click', e => {
      this.funcDeleteNumber();
    });
  }

  header() {
    const header = this.createTag('header', this.app, 'header');
    header.innerHTML = `<div class="container top-radius"><h2>Keypad</h2></div>`;
  }

  events(){
    this.funcCalling();
    this.funcDeleteNumberFromBtn();
    this.funcKeyDown();
  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    this.createNumberHolder(div);
    this.events();
    this.createFooter();

  }

  render() {

    this.header();
    this.main();

  }
}

const keypad = new Keypad();
keypad.render();