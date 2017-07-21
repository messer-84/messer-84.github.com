class ResizeBlock {
  constructor() {
    this.wrap = document.querySelector('section');
    this.list = [...document.querySelectorAll('section > div')];
    this.firstElem = this.list[0];
    this.lastElem = this.list[this.list.length-1];
    this.startX = 0;
    this.initFlexBasis();
    this.mouseDownEvent();
  }

  initFlexBasis() {
    this.list.forEach((elem) => {
      elem.style.flex = '0 0 ' + elem.offsetWidth + 'px';
    });
  }

  mouseDownEvent() {
    var self = this;
    this.wrap.addEventListener('mousedown', function (e) {
      self.startX = e.pageX;

      if(e.target.parentNode === self.firstElem ){
        self.lastElem.style.flexGrow = '0';
        self.lastElem.style.flexShrink = '0';
      }
      if(e.target.parentNode === self.list[1]){
        self.firstElem.style.flexGrow = '0';
        self.firstElem.style.flexShrink = '0';
      }

      addEventListener('mousemove', self.mouseMoveFunc.bind(self));
    });
    this.wrap.addEventListener('mouseup', function (e) {
      removeEventListener('mousemove', self.mouseMoveFunc.bind(self));
    })
  }

  mouseMoveFunc(e) {
    if (event.which == 1) {
      var control = e.target;
      var moveX = e.pageX;
      var currentParent = control.parentNode;
      var siblingParent = control.parentNode.nextElementSibling;


      if (currentParent == this.firstElem || currentParent == this.list[1]) {
        var currentFlexWidth = currentParent.offsetWidth;
        var siblingFlexWidth = siblingParent.offsetWidth;

        if (moveX > this.startX) {
          currentParent.style.flex = '1 1 ' + ++currentFlexWidth + 'px';
          siblingParent.style.flex = '1 1 ' + --siblingFlexWidth + 'px';
        }
        else {
          currentParent.style.flex = '1 1 ' + --currentFlexWidth + 'px';
          siblingParent.style.flex = '1 1 ' + ++siblingFlexWidth + 'px';
        }
      }
    }

  }

  static start() {
    return new ResizeBlock();
  }
}


ResizeBlock.start();