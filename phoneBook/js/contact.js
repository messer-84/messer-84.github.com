import api from './api-service';
import app from './app';

class Contacts {
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

	renderUsers(parent) {
		api.requestUsers().then(users => {
			this.appState.db.users = users;
			this.appState.db.sortedUsers = users;
			const table = this.createTag('table', parent, 'table table-hover contacts');
			table.innerHTML = `<thead><tr><th>Full Name</th><th>Phone</th><th>Email</th></tr></thead>`;
			const tbody = this.createTag('tbody', table);
			this.createTR(tbody, users);
			this.tableSort(this.appState.db.sortedUsers);
			this.getUser(this.appState.db.sortedUsers);

		})
	}

	createSearchBlock(parent) {
		const form = this.createTag('form', parent, 'form-inline search-form');
		form.innerHTML = `<div class="form-group">
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control" id="search" placeholder="Search">
              </div>`;
	}

	createTR(parent, data) {
		var trHtml = '';
		data.forEach(elem => {
			trHtml += `<tr><td>${elem.fullName}</td><td>${elem.phone}</td><td>${elem.email}</td></tr>`;
		});
		parent.innerHTML = trHtml;

	}


	tableSort(userData) {

		let thCell = document.querySelectorAll('th');
		var thead = document.querySelector('thead');

		thead.addEventListener('click', e => {
			const control = e.target;
			let field;
			control.classList.toggle('sort')

			if (control === thCell[0]) {
				field = 'fullName';
			}
			if (control === thCell[1]) {
				field = 'phone';
			}
			if (control === thCell[2]) {
				field = 'email'
			}
			console.log(control.className);
			var newUsers = userData.sort((a, b) => {

				if (control.className.indexOf('sort') !== -1) {
					return a[field] > b[field];
				}
				else {
					return a[field] < b[field];
				}
			});
			console.log(control);

			console.log(newUsers);

			let tbodyHtml = document.querySelector('tbody');
			tbodyHtml.innerHTML = '';
			this.appState.db.sortedUsers = newUsers;
			this.createTR(tbodyHtml, newUsers);

		});
	}

	getUser(users) {
		var href = 'user.html';
		var tbody = document.querySelector('tbody');
		tbody.addEventListener('click', e => {
			var userIndex = e.target.parentElement.rowIndex - 1;
			this.appState.db.selectedUser = userIndex;
			app.ui.user.render();
			history.pushState(href, href, href);

		});

	}

	header() {

		const header = this.createTag('header', this.app, 'header');
		header.innerHTML = `<div class="container top-radius"><h2>Contacts</h2></div>`;
	}

	main() {
		const mainHtml = this.createTag('main', this.app);
		const div = this.createTag('div', mainHtml, 'container');
		this.createSearchBlock(div);
		this.renderUsers(div);
	}

	render() {
		this.app.innerHTML = '';
		this.header();
		this.main();

	}
}

export default Contacts;

