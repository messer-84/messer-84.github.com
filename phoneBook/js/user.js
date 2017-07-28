class User {
  constructor(options) {
    this.navData = options.navData;
    this.headerLinks = options.headerLinks;
    this.userPhotoPath = options.userPhotoPath;
    this.userFirstName = options.userFirstName;
    this.userLastName = options.userLastName;
    this.optionsArray = options.optionsArray;
    this.userAllData = options.userAllData;
    this.optionsTableArray = options.optionsTableArray;
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
            <a href="${this.headerLinks[0]}" id="backToContacts"> < Contacts</a>
            <a href="${this.headerLinks[1]}" id="editContact">Edit</a>
        </div>`;
  }
  createOptionsLine(parent){
    const optionsLine = this.createTag('div', parent, 'options-line');
    let optionsStr = '';
    this.optionsArray.forEach(elem => {
      optionsStr += `<div class="${elem}">
        <div class="option-icon ${elem}_mod"></div>
        <div class="option-text">${elem}</div>
</div>`
    });
    optionsLine.innerHTML = optionsStr;

  }
  createOptionsTable(parent){
    const optionsTable = this.createTag('div', parent, 'options-table');
    const userDataAll = this.userAllData;
    let userDataStr = '';
    let optionsItemsStr = '';
    for(let key in userDataAll){
      userDataStr += `<div class="user-data">
        <h3>${key}</h3>
        <div>${userDataAll[key]}</div>
        </div>`;
    }
    this.optionsTableArray.forEach(elem => {
      optionsItemsStr += `<div class="options-item">
        <a href="#">${elem}</a>
</div>`;
    });

    optionsTable.innerHTML = `<div class="user-data-all">
    ${userDataStr}
    </div> ${optionsItemsStr}`;
  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    const imgWrap = this.createTag('div', div, 'imgWrap');
    imgWrap.innerHTML = `<img src="${this.userPhotoPath}">`;
    const userName = this.createTag('div', div, 'user-name');
    userName.innerHTML = this.userFirstName + " " + this.userLastName;
    this.createOptionsLine(div);
    this.createOptionsTable(div);
    this.createFooter();
  }

  render() {
    this.header();
    this.main();
  }
}

const user = new User({
  headerLinks: ['index.html', 'edit-user.html'],
  userFirstName: 'Татьяна',
  userLastName: 'Иванова',
  userPhotoPath: 'img/galina.png',
  optionsArray: ['message','call', 'video', 'mail'],
  userAllData: {email: 'test@test.com', phone: '(254)-14-44-444'},
  optionsTableArray: ['Notes','Send message','Share contact','Add to favorites','Share my location', 'Block this caller'],
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
user.render();

