// все запросы к серверу вот здесь

class Api {
  constructor(url) {
    this.url = url;
  }

  requestUsers() {
    fetch(this.url)
        .then(data => data.json())
        .then(data => {
          this.state = data;
          app.render();
        });

  }
}
const url = 'https://easycode-js.herokuapp.com/test/';
const api = new Api(url + 'users');
api.requestUsers();


