class App {
  constructor() {
    this.state = {
      db: {
        users: [],
        activeUsers: [],
        lastMessages: []
      },
      locals: {
        forms: {
          input: ''
        }
      }
    };

    this.ui = {
      index: new Contacts(this.state), // users
      // keypad: new Keypad(this.state),
      // addUser: new AddUser(this.state),
      // editUser: new EditUser(this.state),
      // user: new User(this.state)
    };
  }

  router() {
    const content = document.querySelector('.content');
    // обновление контента внутри данного элемента
    function updateState(state) {
      content.innerHTML = state;
    }
    // все ссылки к которым мы добавим собственный роутер
    window.addEventListener('load', (e) => {
      const links = [...document.querySelectorAll('.tab')];
      links.forEach(link => {
        // куда ведет ссылка
        let href = link.getAttribute('href');

        link.addEventListener('click', e => {
          e.preventDefault();
          updateState(href); // ТО ЧТО ВЫ ХОТИТЕ ОТРЕНДЕРИТЬ !
          // для того, чтобы работали переходы на сервере вперед -> назад <-
          history.pushState(href, href, href);
        });
      });
    });
    window.addEventListener('popstate', event => {
      updateState(event.state);
    });
  }

  render() {
    this.ui.index.render();
  }
}

const app = new App();
// console.log(app.state);
