class View {
  constructor(data) {
    this.elements = {
      listItem: document.querySelector('.list-item'),
      btnAdd: document.querySelector('.btn'),
      input: document.querySelector('.input')
    };
    this.render(data);
  }

  render(data){
    var list = '';
    data.forEach(elem => list += `<li><span contenteditable="true" class="text">${elem}</span><button class="delete">x</button></li>`);
    this.elements.listItem.innerHTML = list;
  }
}

