import fetch from '../tools/fetch';

// описание API
const BASE = 'https://api.punkapi.com/v2'; // базовй урл

export function getOneItem() {
  // один объект
  return fetch(`${BASE}/beers/1`);
}

export function getAllItems() {
  // стандартные 25 объектов
  return fetch(`${BASE}/beers`);
}

export function getOneRandomItem() {
  // один случайный объект
  return fetch(`${BASE}/beers/random`);
}

export function getOneBeforeData(data) {
  // все объекты до даты 11-2010
  // https://api.punkapi.com/v2/beers?buzz
  return fetch(`${BASE}/beers?brewed_before=${data}`);
}

export function getAllByName(name) {
  // все объекты которые совпадают по заданному имени (String)
  // https://api.punkapi.com/v2/beers?beer_name=buzz
  // https://api.punkapi.com/v2/beers?yeast=buzz
  return fetch(`${BASE}/beers?beer_name=${name}`);
}

export function getAllBeforeDataUpAbvGt(data, number) {
  // до даты 10-2010 и с abv больше чем 3 (целая цифра)
  return fetch(`${BASE}/beers?brewed_before=${data}&abv_gt=${number}`);
}

export function getAllUpAbvGt(number) {
  // все объекты с abv больше чем 3 (целая цифра)
  return fetch(`${BASE}/beers?abv_gt=${number}`);
}

export function getAllDownAbvLt(number) {
  // все объекты с abv меньше чем 3 (целая цифра)
  return fetch(`${BASE}/beers?abv_lt=${number}`);
}

export function getAllOnPage(page, number) {
  // Постраничная пагинация. Все объекты на странице {page} кол-во ${number}
  return fetch(`${BASE}/beers?page=${page}&per_page=${number}`);
}


export default {
  getOneItem,
  getAllItems,
  getOneRandomItem,
  getOneBeforeData,
  getAllBeforeDataUpAbvGt,
  getAllUpAbvGt,
  getAllDownAbvLt,
  getAllOnPage,
  getAllByName,
};
