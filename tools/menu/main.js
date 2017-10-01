(function() {
  const menu = document.querySelector('#menu');
  const isMenuItem = e => e.target.classList.contains('menu_item');
  const closeMenu = elem => elem.classList.remove('open');
  const openMenu = elem => elem.classList.add('open');

  menu.addEventListener('mouseover', e => {
    if (isMenuItem(e)) {
      const child = e.target.firstElementChild;
      openMenu(child);
      child.addEventListener('mouseover', e => openMenu(child));
      child.addEventListener('mouseout', e => closeMenu(child));
    }
  });
  menu.addEventListener('mouseout', e => {
    if (isMenuItem(e)) {
      closeMenu(e.target.firstElementChild);
    }
  });
})();
