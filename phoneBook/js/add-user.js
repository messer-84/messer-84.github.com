class AddUser {
	constructor(appState) {
		this.appState = appState;
		this.app = document.querySelector('#app');
		this.phoneBlock = '';
		this.url = 'https://easycode-js.herokuapp.com/maksimVorobyov/users';

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


	header() {
		const header = this.createTag('header', this.app, 'header');
		header.innerHTML = `<div class="container top-radius"><nav class="user-top-line">
    				<a href="index.html" id="cancel">Cancel</a>
    				<button class="done-btn" id="done">Done</button>
    			</nav></div>`;
	}

	createMainInfo(parent) {
		const addMainBlock = this.createTag('div', parent, 'edit-main-info');
		addMainBlock.innerHTML = `<div class="edit-foto">
    					<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
    					  <input type="file" id="photo" class="file add-btn">
    						<span>add foto</span></button>
    				</div> 
    				<div class="main-info-holder">
    					<div class="edit-field">
    						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span class="add-label">First name</span>
								<span class="contentedit" id='fullName' contenteditable="true"></span>
    						
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
		const scrollHolder = this.createTag('div', parent, 'scroll-holder');
		scrollHolder.innerHTML = `<div class="edit-info"><div class="edit-field">
      						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
      						<span class="add-label">add phone</span>
      						<span class="contentedit" id='phone' contenteditable="true"></span>
      						
      					</div><div class="edit-field">
      			<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
      			<span class="add-label">add email</span>
      			      						<span class="contentedit" id='email' contenteditable="true"></span>
      			
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
                <button href="#" class="delete-contact" id="clear">clear fields</button>
              </div>
            </div> `;
	}

	sendData(mod) {
		const doneBtn = document.querySelector('#done');
		doneBtn.addEventListener('click', e => {
			var newUser = {};
			var fieldsElem = document.querySelectorAll('.contentedit');
			[...fieldsElem].forEach(elem => {
				if (mod === 'edit') {
						newUser[elem.id] = elem.textContent;
				}
			});
			api.addUser(this.url, newUser);
			alert('User added!!!');
		});
	}

	clearData() {
		const clearBtn = document.querySelector('#clear');
		let fieldsElem = document.querySelectorAll('.contentedit');
		clearBtn.addEventListener('click', e => {
			[...fieldsElem].forEach(elem => {
				elem.textContent = '';
			});
		});
	}

	setEndOfContenteditable(contentEditableElement) {
		var range, selection;
		range = document.createRange();
		range.selectNodeContents(contentEditableElement);
		range.collapse(false);
		selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	}

	numberPressed(evt) {
		var phoneBlock = document.querySelector('#phone');

		this.setEndOfContenteditable(phoneBlock);
		var charCode = (evt.which) ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)) {
			return false;
		}
		return true;
	}

	phoneFormat(input) {
		var phoneBlock = document.querySelector('#phone');

		this.setEndOfContenteditable(phoneBlock);
		input = input.replace(/\D/g, '');
		input = input.slice(0, 10);

		var size = input.length;

		if (size == 0) {
			input = input;
		}
		else if (size < 4) {
			input = '(' + input;
		} else if (size < 7) {
			input = '(' + input.slice(0, 3) + ') ' + input.slice(3, 7);
		} else {
			input = '(' + input.slice(0, 3) + ') ' + input.slice(3, 7) + ' - ' + input.slice(7, 10);
		}
		return input;


	}


	phoneCheck() {
		var phoneBlock = document.querySelector('#phone');

		phoneBlock.addEventListener('keyup', (e) => {
			phoneBlock.textContent = this.phoneFormat(phoneBlock.textContent);
		});

		phoneBlock.addEventListener('keypress', this.numberPressed.bind(this));
	}

	main() {
		const mainHtml = this.createTag('main', this.app);
		const div = this.createTag('div', mainHtml, 'container');
		this.createMainInfo(div);
		this.createInfo(div);
		this.sendData('edit');
		this.clearData();
		this.phoneCheck();
	}

	render() {
		this.app.innerHTML = '';
		this.header();
		this.main();
	}
}


