// Получаю элемент куда будем рендерить
const content = document.querySelector('.content');
// обновление контента внутри данного элемента
function updateState(state) {
  content.innerHTML = state;
}
// все ссылки к которым мы добавим собственный роутер

window.addEventListener('load', (e) => {
  const links = [...document.querySelectorAll('.tab')];
  links.forEach(link => {
    // куда ведет ссылка
    let href = link.getAttribute('href');
    // console.log(href);

    link.addEventListener('click', e => {

      e.preventDefault();
      updateState(href); // ТО ЧТО ВЫ ХОТИТЕ ОТРЕНДЕРИТЬ !
      // для того, чтобы работали переходы на сервере вперед -> назад <-
      history.pushState(href, href, href);
    });
  });
});
// я добавляю на каждую ссылку событие


window.addEventListener('popstate', event => {
  updateState(event.state);
});
