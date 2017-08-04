(function () {
  const initialDatabase = ['JS', 'React', 'Node.js'];
  localStorage.setItem('database', initialDatabase);
  const localDB = window.localStorage.getItem('database').split(',');

  // скачал с сервера
  const model = new Model(localDB);
  const view = new View(localDB);

  const controller = new Controller(model, view);
})();