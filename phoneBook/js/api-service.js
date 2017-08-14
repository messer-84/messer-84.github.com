// все запросы к серверу вот здесь

class Api {
  constructor(url) {
    this.url = url;
  }

  requestUsers() {
    return fetch(this.url).then(users => users.json());
  }

  addUser(url, user) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  }

  editContact(url, user) {
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).catch(err => console.error(err));
  }

  deleteContact(url) {
    console.log(url);

    fetch(url, {
      method: 'DELETE',
    }).catch(err => console.error(err));
  }
}

const url = 'http://easycode-js.herokuapp.com/maksimVorobyov/';
const api = new Api(url + 'users');

export default api;
