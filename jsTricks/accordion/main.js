initAccordion('.accordion', '.accordion-title', '.active');

function initAccordion(parentClass, titleClass, activeClass) {
  var mainArr = document.querySelectorAll(parentClass);
  activeClass = activeClass.slice(1);

  mainArr.forEach(function (mainElem) {
    mainElem.addEventListener('click', function (e) {
      var titlesArr = mainElem.querySelectorAll(titleClass);

      var newElemClassesArr, newThatClassesArr;
      var that = e.target;

      // if click on title  - begin
      if (that.className.indexOf(titleClass.slice(1)) !== -1) {
        console.log('here');

        var thatClassesArr = that.className.split(' ');
        var thatIndexActive = thatClassesArr.indexOf(activeClass);
        // if elem-target has class active - remove it
        if (thatIndexActive !== -1) {
          thatClassesArr.splice(thatIndexActive, 1);
        }
        else {
          // remove class active for all
          titlesArr.forEach(function (elem, index, array) {
            var classArr = elem.className.split(' ');
            var indexElActive = classArr.indexOf(activeClass);
            if (indexElActive !== -1) {
              classArr.splice(indexElActive, 1);
              setNewClasses(newElemClassesArr, classArr, elem);
            }
          });
          thatClassesArr.push(activeClass);
        }
        //add class active elem-target
        setNewClasses(newThatClassesArr, thatClassesArr, that);
      }
    });
  });

  function setNewClasses(newClasses, array, element) {
    newClasses = array.join(' ');
    element.setAttribute('class', newClasses);
  }
}

