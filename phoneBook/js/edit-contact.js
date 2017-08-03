class EditContact {
  constructor(appState) {
    this.appState = appState;
    this.app = document.querySelector('#app');
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
    const div = this.createTag('div', header, 'container top-radius');
    div.innerHTML = `<nav class="user-top-line">
    				<a href="user.html" id="cancel">Cancel</a>
    				<button class="done-btn" id="done">Done</button>
    			</nav>`;
  }

  createMainInfo(parent) {

    var index = this.appState.db.selectedUser;
    var user = this.appState.db.users[index];
console.log(user);

    const editMainBlock = this.createTag('div', parent, 'edit-main-info');
    editMainBlock.innerHTML = `<div class="edit-foto">
       					<img src="img/avatar.jpg" alt="#" class=" user-img img-circle center-block">
       				</div>
        				<div class="main-info-holder">
       					<div class="edit-field">
        						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        						<label class="sr-only" for="name">First name</label>
        						<input type="text" class="add-btn" id="fullName" placeholder="First Name" value="${user.fullName}">
        					</div>
        					<div class="edit-field">
        						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        						<label class="sr-only" for="lastname">Last name</label>
        						<input type="text" class="add-btn" id="lastname" placeholder="Last Name" value="">
        					</div>
        					<div class="edit-field">
        						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        						<label class="sr-only" for="company">Company</label>
        						<input type="text" class="add-btn" id="company" placeholder="Company" value="">
        					</div>
        				</div> `;
  }

  createInfo(parent) {
    var index = this.appState.db.selectedUser;
    var user = this.appState.db.users[index];
    const scrollHolder = this.createTag('div', parent, 'scroll-holder');
    scrollHolder.innerHTML = `<div class="edit-info"><div class="edit-field">
          						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          						<label class="sr-only" for="phone">Add phone</label>
          						<input type="text" class="add-btn" id="phone" placeholder="add phone" value="${user.phone}">
          					</div><div class="edit-field">
          			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          			<label class="sr-only" for="email">Add email</label>
          			<input type="text" class="add-btn" id="email" placeholder="add email" value="${user.email}">
          					</div>
          			<div class="edit-field">
          				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
          				<label class="sr-only" for="address">Add address</label>
          				<input type="text" class="add-btn" id="address" placeholder="add address" value="">
                </div>
                <div class="edit-field">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <label class="sr-only" for="birthday">Add birthday</label>
                  <input type="text" class="add-btn" id="birthday" placeholder="add birthday" value="">
                  </div>
                <div class="edit-field">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <label class="sr-only" for="socialProfile">Add social profile</label>
                  <input type="text" class="add-btn" id="socialProfile" placeholder="add social profile" value="">
                </div>
                <div class="edit-field">
                  <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                  <label class="sr-only" for="addField">Add field</label>
                  <input type="text" class="add-btn" id="addField" placeholder="add field" value="">
                </div>
                  <div class="edit-field">
                    <button href="#" class="delete-contact" id="delete">delete contact</button>
                  </div>
                </div> `;
  }
  sendData(mod) {
    const doneBtn = document.querySelector('#done');
    doneBtn.addEventListener('click', e => {
      var userObj = {};
      var fieldsElem = document.querySelectorAll('.add-btn');
      [...fieldsElem].forEach(elem => {
        if(mod === 'edit'){
          if (elem.id === 'phone') {
            userObj[elem.id] = elem.value.slice(10);
          }
          else {
            userObj[elem.id] = elem.value;
          }
        }
        else{
          userObj[elem.id] = elem.value;
        }
      });

      fetch(this.url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      });
    });
  }

  phoneCheck(id) {
    const phoneField = document.querySelector(id);

    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
      }
    }

    function mask(event) {
      var matrix = this.defaultValue,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      def.length >= val.length && (val = def);
      matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
      });
      this.value = matrix;
      i = matrix.lastIndexOf(val.substr(-1));
      i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
      setCursorPosition(i, this)
    }

    // phoneField.addEventListener('input', mask, false);

  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    this.createMainInfo(div);
    this.createInfo(div);
    this.sendData();
    // this.deleteContact();
    this.phoneCheck('#phone');

  }

  render() {
    this.app.innerHTML = '';
    this.header();
    this.main();
  }
}



