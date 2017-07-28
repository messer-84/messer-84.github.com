class App {
  constructor(options) {
    this.pageName = options.pageName;
    this.navData = options.navData;
    this.placeholderSearch = 'Search';
    this.theadData = options.theadData;
    this.userFields = options.userFields;
    this.app = document.querySelector('.app');
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


  getUsers() {
    this.doRequest(this.url, function (err, response) {
      if (err) {
        return "";

      } else {
        console.log(response);

        return response;
      }
    });
  }

  doRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    var res;
    xhr.open("GET", url, true); // for async
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          res = xhr.responseText;
          callback(null, res);
        } else {
          callback(xhr.statusText);
        }
      }
    });
    xhr.send(null);
  }

  createSearchBlock(parent) {
    const form = this.createTag('form', parent, 'form-inline search-form');
    const formDiv = this.createTag('div', form, 'form-group');
    formDiv.innerHTML = `<div class="form-group"><label class="sr-only" for="search">${this.placeholderSearch}</label><input class="form-control" type="text" id="search" placeholder="Search"></div>`;
  }

  createTR(parent, objData, typeCell) {
    if (typeCell === 'th') {
      let trHtml = this.createTag('tr', parent);
      objData.forEach(elem => {
        trHtml.innerHTML += `<th>${elem}</th>`;
      });
    }
    else if (typeCell === 'td') {
      objData.forEach(elem => {
        let trHtml = this.createTag('tr', parent);
        console.log(elem.email);
        trHtml.innerHTML = `<td>${elem.fullName}</td><td>${elem.phone}</td><td>${elem.email}</td>`;
        // for (let key in elem) {
        //   if (key === 'fullName' || key === 'phone' || key === 'email') {
        //     trHtml.innerHTML += `<td>${elem[key]}</td>`;
        //   }
        // }
      });
    }
  }

  createNav(parent) {
    const myNav = this.createTag('nav', parent, 'main-nav');
    this.navData.forEach(elem => {
      let linkClassName = elem.linkActive ? 'tab active' : 'tab';
      myNav.innerHTML += `<a href="${elem.href}" class="${linkClassName}">
        <span class="${elem.spanOneClass}" ${elem.spanOneAttr}=${elem.spanOneAttrValue}></span>
        <span class="${elem.spanTwoClass}">${elem.linkText}</span>
      </a>`;
    });
    return myNav;
  }

  createFooter() {
    const footer = this.createTag('footer', this.app, 'footer');
    const div = this.createTag('div', footer, 'container bottom-radius');
    this.createNav(div)

  }

  tableSort(userData) {
    let thCell = document.querySelectorAll('th');

    [...thCell].forEach(elem => {
      elem.addEventListener('click', e => {
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
        const curState = userData.sort((a, b) => {
          return a[field] > b[field];
        });
        let tbodyHtml = document.querySelector('tbody');
        tbodyHtml.innerHTML = '';
        this.createTR(tbodyHtml, curState, 'td');
      });
    });
  }

  header() {
    const header = this.createTag('header', this.app, 'header');
    const div = this.createTag('div', header, 'container top-radius');
    div.innerHTML = `<h2>${this.pageName}</h2>`;
  }

  main() {
    const mainHtml = this.createTag('main', this.app);
    const div = this.createTag('div', mainHtml, 'container');
    const searchHtml = this.createSearchBlock(div);
    const table = this.createTag('table', div, 'table table-hover contacts');
    const thead = this.createTag('thead', table);
    const theadData = this.createTR(thead, this.theadData, 'th');
    const tbody = this.createTag('tbody', table);
    this.doRequest(this.url, (err, response) => {
      var data = err ? 'test' : JSON.parse(response);
      this.createTR(tbody, data, 'td');
      this.tableSort(data);
    });
    this.createFooter();
  }

  render() {
    this.header();
    this.main();

  }
}

const app = new App({
  pageName: 'Contacts',
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
  ],
  theadData: ['Full name', 'Phone', 'Email'],
});
app.render();

