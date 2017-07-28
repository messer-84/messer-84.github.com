class EditUser {
  constructor(options) {
    this.navData = options.navData;
    this.headerLinks = options.headerLinks;
    this.userPhotoPath = options.userPhotoPath;
    this.userMainData = options.userMainData;
    this.userData = options.userData;
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
            <a href="${this.headerLinks[1]}" id="done">Done</a>
        </div>`;
  }
  createMainInfo(parent){
    const editMainBlock = this.createTag('div', parent, 'edit-main-info');
    const imgWrap = this.createTag('div', editMainBlock, 'edit-foto');
    imgWrap.innerHTML = `<img class="user-img" src="${this.userPhotoPath}">`;

    const mainInfoHolder = this.createTag('div', editMainBlock, 'main-info-holder');
    var mainInfoItems = '';
    var obj = this.userMainData;
    for(let key in obj){
      mainInfoItems += `<div class="edit-field" contenteditable="true"> ${obj[key]} </div>`
    }
    mainInfoHolder.innerHTML = mainInfoItems;
  }
  createInfo(parent){
    const scrollHolder = this.createTag('div', parent, 'scroll-holder');
    const editInfo = this.createTag('div', scrollHolder, 'edit-info');
    var obj = this.userData;
    var editFields = '';
    for(let key in obj){
      var data = obj[key] ? obj[key] : key;
      editFields += `<div class="edit-field" contenteditable="true">${data}</div>`;
    }
    editInfo.innerHTML = editFields;
    const lastField = '<div class="edit-field"><button id="deleteContact">delete contact</button></div>'
    scrollHolder.insertAdjacentHTML('beforeEnd', lastField);
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
  }
}

const editUser = new EditUser({
  headerLinks: ['user.html', 'index.html'],
  userPhotoPath: 'img/galina.png',
  userMainData: {firstName: 'Иван', lastName: 'Иванов', company: 'Nike'},
  userData: {phone: '0935556666', email: 'test@test.com', address: '', birthday: '', socialProfile: ''},
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
    }
  ]
});
editUser.render();

