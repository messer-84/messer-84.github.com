class User {
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

  createNav(parent) {
    const myNav = this.createTag('nav', parent, 'main-nav');
    myNav.innerHTML = `
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
    				</a>`;
    return myNav;
  }

  createFooter() {
    const footer = this.createTag('footer', this.app, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    this.createNav(div)
  }

  header() {
    const header = this.createTag('header', this.app, 'header');
    header.innerHTML = `<div class="container top-radius"><div class="user-top-line">
    				<a href="index.html" id="backToContacts">
    					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Contacts
    				</a>
    				<a href="edit-contact.html" id="editContact">Edit</a>
    			</div></div>`;
  }

  createOptionsLine(parent) {
    const optionsLine = this.createTag('div', parent, 'options-line');
    optionsLine.innerHTML = `<div class="message">
    					<div class="options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>
    					<span class="options-text">message</span>
    				</div>
    				<div class="call">
    					<div class="options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
    					<span class="options-text">call</span>
    				</div>
    				<div class="video">
    					<div class="options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>
    					<span class="options-text">video</span>
    				</div>
    				<div class="mail">
    					<div class="options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
    					<span class="options-text">mail</span>
    				</div>`;

  }

  createOptionsTable(parent) {
    const optionsTable = this.createTag('div', parent, 'options-table');
    let userDataStr = `<div class="user-data-all"><div class="user-data">
    					<h3>email</h3>
    					<div> jo@jo.com</div>
    				</div><div class="user-data">
    					<h3>phone</h3>
    					<div> +3 074 36 76 2367</div>
    				</div></div>`;
    let optionsItemsStr = `<div class="options-item"><a href="#">Notes</a></div>
    				<div class="options-item"><a href="#">Send message</a></div>
    				<div class="options-item"><a href="#">Share contact</a></div>
    				<div class="options-item"><a href="#">Add to favorites</a></div>
    				<div class="options-item"><a href="#">Share my location</a></div>
    				<div class="options-item"><a href="#">Block this caller</a></div>
    			</div>`;


    optionsTable.innerHTML = `<div class="user-data-all">
    ${userDataStr}
    </div> ${optionsItemsStr}`;
  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    // const imgWrap = this.createTag('div', div, 'imgWrap');
    // imgWrap.innerHTML = `<img src="${this.userPhotoPath}">`;
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
  userFirstName: 'Татьяна',
  userLastName: 'Иванова',
  userPhotoPath: 'img/galina.png',
  userAllData: {email: 'test@test.com', phone: '(254)-14-44-444'}
});
user.render();

