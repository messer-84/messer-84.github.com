import api from './api-service';

class EditContact {
  constructor(appState) {
    this.appState = appState;
    this.appHTML = document.querySelector('#app');
    this.url = 'http://easycode-js.herokuapp.com/maksimVorobyov/users';
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
    const header = this.createTag('header', this.appHTML, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.innerHTML = `<nav class="user-top-line">
    				<a href="index.html" id="cancel">Cancel</a>
    				<button class="done-btn" id="done">Done</button>
    			</nav>`;
  }

  createMainInfo(parent) {
    var index = this.appState.db.selectedUser;
    var user = this.appState.db.users[index];

    const editMainBlock = this.createTag('div', parent, 'edit-main-info');
    editMainBlock.innerHTML = `<div class="edit-foto">
       					<img src="img/avatar.jpg" alt="#" class=" user-img img-circle center-block">
       				</div>
        				<div class="main-info-holder">
       					<div class="edit-field">
        						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        						<span class="add-label">First name</span>
                    <span class="contentedit" id='fullName' contenteditable="true">${user.fullName}</span>
        					</div>
        					<div class="edit-field">
        						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        						<span class="add-label">Last name</span>
                    <span class="contentedit" id='lastname' contenteditable="true"></span>
        					</div>
        					<div class="edit-field">
        						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        						<span class="add-label">Company</span>
                    <span class="contentedit" id='company' contenteditable="true"></span>
        					</div>
        				</div> `;
  }

  createInfo(parent) {
    var index = this.appState.db.selectedUser;
    var user = this.appState.db.users[index];
    const scrollHolder = this.createTag('div', parent, 'scroll-holder');
    scrollHolder.innerHTML = `<div class="edit-info"><div class="edit-field">
          						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          						<span class="add-label">add phone</span>
                      <span class="contentedit" id='phone' contenteditable="true">${user.phone}</span>
          					</div><div class="edit-field">
          			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          			<span class="add-label">add email</span>
                <span class="contentedit" id='email' contenteditable="true">${user.email}</span>
          			
          					</div>
          			<div class="edit-field">
          				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          				<span class="add-label">Add address</span>
                  <span class="contentedit" id='address' contenteditable="true"></span>
                </div>
                <div class="edit-field">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <span class="add-label">Add birthday</span>
                  <span class="contentedit" id='birthday' contenteditable="true"></span>
                  </div>
                <div class="edit-field">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <span class="add-label">Add social profile</span>
                  <span class="contentedit" id='socialProfile' contenteditable="true"></span>
                </div>
                <div class="edit-field">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <span class="add-label">Add field</span>
                  <span class="contentedit" id='addField' contenteditable="true"></span>
                </div>
                  <div class="edit-field">
                    <button href="#" class="delete-contact" id="delete">delete contact</button>
                  </div>
                </div> `;
  }

  sendEditData() {
    const indexSelectedContact = this.appState.db.selectedUser;
    const idSelectedContact = this.appState.db.users[indexSelectedContact][
      '_id'
    ];
    const doneBtn = document.querySelector('#done');
    doneBtn.addEventListener('click', e => {
      var userData = {};
      var fieldsElem = document.querySelectorAll('.contentedit');
      [...fieldsElem].forEach(elem => {
        userData[elem.id] = elem.textContent;
      });
      console.log(userData);

      api.editContact(`${this.url}/${idSelectedContact}`, userData);
      alert('User info changed');
    });
  }

  deleteContact() {
    const deleteBtn = document.querySelector('#delete');
    const indexSelectedContact = this.appState.db.selectedUser;
    const idSelectedContact = this.appState.db.users[indexSelectedContact][
      '_id'
    ];
    deleteBtn.addEventListener('click', e => {
      console.log(idSelectedContact);
      console.log(`${this.url}/${idSelectedContact}`);

      api.deleteContact(`${this.url}/${idSelectedContact}`);
      alert('User deleted!!!');
    });
  }

  phoneCheck() {
    const phone = document.querySelector('#phone');
    phone.addEventListener('keydown', e => {
      if (e.key !== 'Backspace') {
        phone.textContent = phoneMask(phone.textContent);
        setEndOfContenteditable(phone);
      }
    });
    function setEndOfContenteditable(contentEditableElement) {
      var range, selection;
      range = document.createRange();
      range.selectNodeContents(contentEditableElement);
      range.collapse(false);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
    function phoneMask(elementContent) {
      elementContent = elementContent.slice(0, 13);
      return elementContent
        .replace(/\D/g, '')
        .replace(/^(\d)/, '($1')
        .replace(/^(\(\d{3})(\d)/, '$1) $2')
        .replace(/(\d{3})(\d{1,4})/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
    }
  }

  main() {
    const mainHtml = this.createTag('main', this.appHTML);
    const div = this.createTag('div', mainHtml, 'container');
    this.createMainInfo(div);
    this.createInfo(div);
    this.sendEditData();
    this.deleteContact();
    this.phoneCheck();
  }

  render() {
    this.appHTML.innerHTML = '';
    this.header();
    this.main();
  }
}

export default EditContact;
