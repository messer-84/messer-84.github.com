function Controller(model, view) {
  this.model = model;
  this.view = view;
  this.init();

}

Controller.prototype.init = function () {
  const {btnAdd} = this.view.elements;
  btnAdd.addEventListener('click', this.addTask.bind(this));
  this.deleteTask();
  this.updateItem();
};


Controller.prototype.addTask = function () {

  const {input} = this.view.elements;
  const value = input.value;
  input.value = '';
  this.model.addItem(value);
  this.view.render(this.model.dataBase);

};

Controller.prototype.deleteTask = function () {
  const list = this.view.elements.listItem;
  list.addEventListener('click', event => {
    if (event.target.className === 'delete') {
      const deleteItem = event.target.previousElementSibling.textContent;
      this.model.deleteItem(deleteItem);

      this.view.render(this.model.dataBase);
    }

  });
};

Controller.prototype.updateItem = function () {
  var oldItem, newItem;
  const list = this.view.elements.listItem;

  list.addEventListener('click', evt => {
    let target = evt.target;
    if(target.className === 'text'){
      oldItem = target.textContent;

      target.addEventListener('focus', evt => {
        oldItem = evt.target.textContent;
      });

      target.addEventListener('blur', evt => {
        newItem = evt.target.textContent;
        if (oldItem !== newItem) {
          this.model.updateItem(oldItem, newItem);
          this.view.render(this.model.dataBase);
        }
      });
    }
  });
};

