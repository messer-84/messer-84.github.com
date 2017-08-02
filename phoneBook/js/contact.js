class Contacts {
  constructor(appState) {
    this.appState = appState;
    this.app = document.querySelector('#app');
    this.url = 'https://easycode-js.herokuapp.com/test/users'
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

  renderUsers(parent){
    api.requestUsers().then(users=>{
      this.appState.db.users = users;
      console.log('appstate', this.appState);

      const table = this.createTag('table', parent, 'table table-hover contacts');
      table.innerHTML = `<thead><tr><th>Full Name</th><th>Phone</th><th>Email</th></tr></thead>`;
      const tbody = this.createTag('tbody', table);
      this.createTR(tbody, users);
      this.tableSort(users);

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
      trHtml += `<tr></tr><td>${elem.fullName}</td><td>${elem.phone}</td><td>${elem.email}</td></tr>`;
    });
    parent.innerHTML = trHtml;

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

  tableSort(userData) {
    let thCell = document.querySelectorAll('th');
    var thead = document.querySelector('thead');

    thead.addEventListener('click', e => {
      let control = e.target;
      let field;

      if (control === thCell[0]) {
        field = 'fullName';
      }
      if (control === thCell[1]) {
        field = 'phone';
      }
      if (control === thCell[2]) {
        field = 'email'
      }
      console.log(userData);

      var newUsers = userData.sort((a, b) => {
        return a[field] > b[field];
      });
      let tbodyHtml = document.querySelector('tbody');
      tbodyHtml.innerHTML = '';
      this.createTR(tbodyHtml, newUsers);
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
    this.createFooter();
  }

  render() {
    this.app.innerHTML = '';
    this.header();
    this.main();

  }
}


