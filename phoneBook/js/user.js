class User {
  constructor(appState) {
    this.app = document.querySelector('#app');
    this.appState = appState;

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


  header() {
    const header = this.createTag('header', this.app, 'header');
    header.innerHTML = `<div class="container top-radius">
          <div class="user-top-line">
    				<a href="index.html" id="backToContacts">
    					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Contacts
    				</a>
    				<a href="edit-contact.html" id="editContact">Edit</a>
    			</div>
        </div>`;
  }

  createOptionsLine(parent) {
    var index = this.appState.db.selectedUser;
    var user = this.appState.db.users[index];

    parent.innerHTML = `
      <img src="img/avatar.jpg" alt="#" class=" user-img img-circle center-block">
      <div class="user-name">${user.fullName}</div>
      <div class="options-line">
        <div class="message">
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
        </div>
      </div>
      <div class="options-table">
        <div class="user-data-all">
          <div class="user-data">
    					<h3>email</h3>
    					<div>${user.email}</div>
          </div>
          <div class="user-data">
    					<h3>phone</h3>
    					<div>${user.phone}</div>
          </div>
        </div>
        <div class="options-item"><a href="#">Notes</a></div>
        <div class="options-item"><a href="#">Send message</a></div>
        <div class="options-item"><a href="#">Share contact</a></div>
        <div class="options-item"><a href="#">Add to favorites</a></div>
        <div class="options-item"><a href="#">Share my location</a></div>
        <div class="options-item"><a href="#">Block this caller</a></div>
      </div>
      </div>`;

  }
  goToEditUser(){
    var control = document.querySelector('#editContact');
    var href = control.getAttribute('href');
    control.addEventListener('click', e =>{
      e.preventDefault();

      app.ui.editContact.render();
      history.pushState(href, href, href);
    });

  }
  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    this.createOptionsLine(div);
    this.goToEditUser();
  }

  render() {
    this.app.innerHTML = '';
    this.header();
    this.main();
  }
}

