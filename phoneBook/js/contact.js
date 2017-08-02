class Contacts {
  constructor(state) {
    this.app = document.querySelector('#app');
    this.url = 'https://easycode-js.herokuapp.com/test/users'
    this.state = state;
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

  // getUsers(parent) {
  //   fetch(this.url)
  //       .then(response => {
  //             if (response.status !== 200) {
  //               console.log('Looks like there was a problem. Status Code: ' +
  //                   response.status);
  //               return;
  //             }
  //             response.json().then(data => {
  //               this.createTR(parent, data);
  //
  //               this.tableSort(data);
  //             });
  //           }
  //       )
  //       .catch(err => {
  //         console.log('Fetch Error :-S', err);
  //       });
  // }

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

  createTable(parent) {
    const table = this.createTag('table', parent, 'table table-hover contacts');
    const thead = this.createTag('thead', table);
    thead.innerHTML = `<tr><th>Full Name</th><th>Phone</th><th>Email</th></tr>`;
    const tbody = this.createTag('tbody', table);
    // this.getUsers(tbody);


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
      this.state = userData.sort((a, b) => {
        return a[field] > b[field];
      });
      let tbodyHtml = document.querySelector('tbody');
      tbodyHtml.innerHTML = '';
      this.createTR(tbodyHtml, this.state);
    });
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

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    this.createSearchBlock(div);
    this.createTable(div);
    this.createFooter();
  }

  render() {
    console.log(this.state);


    this.header();
    this.main();

  }
}

// const contacts = new Contacts();
// contacts.render();

