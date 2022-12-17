import Movie from "../domain/Movie";
import Cart from "../service/Cart";

const movie1 = new Movie(
  1000,
  'Мстители',
  'Avengers',
  true,
  2012,
  'США',
  '"Avengers Assemble!"',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  137,
  'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png',
  50);

const movie2 = new Movie(
  1001,
  'Мстители 2',
  'Avengers 2',
  true,
  2014,
  'США',
  '"Avengers Assemble!"',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  138,
  'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png',
  80);

const referenceObject = {
  badgeIMAX: true,
  country: "США",
  genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  id: 1000,
  name: "Мстители",
  originalName: "Avengers",
  poster: "https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png",
  tagline: '"Avengers Assemble!"',
  timelineInMinutes: 137,
  year: 2012,
  price: 50
}

test('Класс Movie создает корректный объект', () => {
  expect(movie1).toEqual(referenceObject)
})

test('Добавление объектов класса Movie в корзину работает', () => {
  const cart = new Cart();
  cart.add(movie1)
  expect(cart.items[0]).toEqual(referenceObject)
})

test('Метод sumWithoutDiscount правильно считает сумму', () => {
  const cart = new Cart();
  cart.add(movie1)
  cart.add(movie2)
  expect(cart.sumWithoutDiscount()).toBe(130);
})

test('Метод sumWithDiscount правильно считает сумму со скидкой', () => {
  const cart = new Cart();
  cart.add(movie1)
  cart.add(movie2)
  expect(cart.sumWithDiscount(10)).toBe(117);
})

test('Метод deleteItem удаляет фильм из корзины', () => {
  const cart = new Cart();
  cart.add(movie1)
  cart.add(movie2)
  cart.deleteItem(1001)
  expect(cart.items.length).toBe(1);
  expect(cart.items[0]).toEqual(movie1);
})
