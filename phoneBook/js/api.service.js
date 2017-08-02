// все запросы к серверу вот здесь

class Api {
  constructor(url) {
    this.url = url;
    this.state = [];
  }

  requestUsers() {
    // return fetch(this.url)
    //     .then(data => data.json)
    //     .then(data => {
    //       console.log(this.url);
    //
    //       console.log(data);
    //     });

    return fetch(this.url)
        .then(
            response => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
              }
              response.json().then(data => {
                this.state = data;
                console.log('state', this.state);

              });
            }
        )
        .catch(err => {
          console.log('Fetch Error :-S', err);
        });

  }
}
const url = 'https://easycode-js.herokuapp.com/test/';
const api = new Api(url + 'users');
api.requestUsers();
console.log(api.state);


