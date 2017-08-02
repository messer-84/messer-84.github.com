class App {
  constructor() {
    // console.log(this.state);
    console.log('app', this);
    this.state = {
          db: {
            users: [],
            activeUsers: [],
            lastMessages: []
          },
          locals: {
            forms: {
              input: 'qweqwe'
            }
          }
        };

    this.ui = {
      index: new Contacts(this.state), // users
      keypad: new Keypad(this.state),
      // addUser: new AddUser(this.state),
      // editUser: new EditUser(this.state),
      // user: new User(this.state)
    };

  }
  init(){
    this.render();
    this.router();
  }

  router() {
    console.log('router work');
    window.addEventListener('load', (e) => {

      const links = [...document.querySelectorAll('.tab')];
      links.forEach(link => {
        let href = link.getAttribute('href');

        link.addEventListener('click', e => {
          console.log('click');
          e.preventDefault();
          if(href === 'keypad.html'){
            this.ui.keypad.render();
          }
          if(href === 'index.html'){
            this.ui.index.render();
            console.log('inddddddeeeexxxx');

          }
          history.pushState(href, href, href);
        });
      });
    });
    window.addEventListener('popstate', event => {

    });
  }

  render() {
    this.ui.index.render();
  }
}

const app = new App();
app.init();

