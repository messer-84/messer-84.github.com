// все запросы к серверу вот здесь

class Api {
  constructor(url) {
    this.url = url;
    this.state = [];
  }

  requestUsers() {
    return fetch(this.url)
        .then(data => data.json)
        .then(data => {
          console.log(data);
        });



  }
}
const url = 'https://easycode-js.herokuapp.com/test/';
const api = new Api(url + 'users');
api.requestUsers();
console.log(api.state);


