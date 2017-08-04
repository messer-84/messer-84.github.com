function Model(initialDatabase) {
  this.dataBase = initialDatabase;
}

/* CRUD create read update delete*/

Model.prototype.addItem = function (newItem) {
  if (!newItem) return;
  this.dataBase.push(newItem);

};

Model.prototype.deleteItem = function (itemToRemove) {
  let index = this.dataBase.indexOf(itemToRemove);
  if (index === -1) return;
  this.dataBase.splice(index, 1);
};

Model.prototype.updateItem = function (oldItem, newItem) {
  let index = this.dataBase.indexOf(oldItem);

  if (!~index) return;

  this.dataBase.splice(index, 1, newItem);

};