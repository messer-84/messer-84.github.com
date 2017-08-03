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
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
	}
}
const url = 'https://easycode-js.herokuapp.com/test/';
const api = new Api(url + 'users');




