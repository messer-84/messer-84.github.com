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
			addUser: new AddUser(this.state),
			// editUser: new EditUser(this.state),
			// user: new User(this.state)
		};

	}

	createFooter() {
		const body = document.querySelector('body');
		const footer = document.createElement('footer');
		footer.className = 'footer';
		body.appendChild(footer);
		footer.innerHTML = `<div class="container bottom-radius">
          <nav class="main-nav">
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
    				</a>
          </nav>
        </div>`;
	}


	init() {
		this.render();
		this.router();
	}

	router() {
		window.addEventListener('load', (e) => {
			const links = [...document.querySelectorAll('.tab')];
			links.forEach(link => {
				let href = link.getAttribute('href');
				link.addEventListener('click', e => {
					e.preventDefault();
					if (href === 'keypad.html') {
						this.ui.keypad.render();
					}
					if (href === 'index.html') {
						this.ui.index.render();
					}
					if(href === 'add-user.html'){
						this.ui.addUser.render();
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
		this.createFooter();
	}
}

const app = new App();
app.init();

