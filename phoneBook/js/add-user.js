class AddUser {
  constructor(options) {
    this.navData = options.navData;
    this.headerLinks = options.headerLinks;
    this.userPhoto = options.userPhoto;
    this.userMainFields = options.userMainFields;
    this.userFields = options.userFields;
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

  header() {
    const header = this.createTag('header', this.app, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.innerHTML = `<div class="user-top-line">
            <a href="${this.headerLinks[0]}" id="cancel"> Cancel</a>
            <button id="done">Done</button>
        </div>`;
  }

  createMainInfo(parent) {
    const addMainBlock = this.createTag('div', parent, 'edit-main-info');
    const imgWrap = this.createTag('div', addMainBlock, 'edit-foto');
    imgWrap.innerHTML = `<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
    						<span>add ${this.userPhoto}</span>
    						</button>`;

    const mainInfoHolder = this.createTag('div', addMainBlock, 'main-info-holder');
    var mainInfoItems = '';
    this.userMainFields.forEach(elem => {
      mainInfoItems += `<div class="edit-field" contenteditable="true" id="${elem}">${elem}</div>`;
    });
    mainInfoHolder.innerHTML = mainInfoItems;
  }

  createInfo(parent) {
    const scrollHolder = this.createTag('div', parent, 'scroll-holder');
    const editInfo = this.createTag('div', scrollHolder, 'edit-info');
    var obj = this.userFields;
    var editFields = '';
    this.userFields.forEach(elem => {
      editFields += `<div class="edit-field" id="${elem}" contenteditable="true">add ${elem}</div>`;
    });

    editInfo.innerHTML = editFields;
    const lastField = '<button href="#" class="delete-contact" id="clear">clear fields</button>';
    scrollHolder.insertAdjacentHTML('beforeEnd', lastField);
  }
  getData(){
    const doneBtn = document.querySelector('#done');
    doneBtn.addEventListener('click', e =>{

      var userObj = {};
      var fieldsElem = document.querySelectorAll('.edit-field');
      [...fieldsElem].forEach(elem => {
        var text = elem.textContent.replace('add', '');
        userObj[elem.id] = text;
      });

      let xhrPOST = new XMLHttpRequest();

      xhrPOST.addEventListener('readystatechange', () =>{
        if(xhrPOST.readyState === 4){
          console.log('response: ', JSON.parse(xhrPOST.response));
          console.log('responseText: ', xhrPOST.responseText);
        }
      });
      xhrPOST.open('POST', 'https://easycode-js.herokuapp.com/maksimVorobyov/users');
      xhrPOST.setRequestHeader('Content-Type', 'application/json');
      xhrPOST.send(JSON.stringify(userObj));
    });
  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    const mainInfo = this.createMainInfo(div);
    const info = this.createInfo(div);
    this.createFooter();
  }

  render() {
    this.header();
    this.main();
    this.getData();
  }
}

const addUser = new AddUser({
  headerLinks: ['user.html', '#'],
  userPhoto: 'photo',
  userMainFields: ['fullName', 'Last Name', 'Company'],
  userFields: ['phone', 'email', 'address', 'birthday', 'social profile', 'field'],
  navData: [
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
addUser.render();

