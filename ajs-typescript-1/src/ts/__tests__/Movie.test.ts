import Movie from "../domain/Movie";
import Cart from "../service/Cart";

test('Класс Movie создает корректный объект', () => {
  expect(new Movie(
    1000,
    'Мстители',
    'Avengers',
    true,
    2012,
    'США',
    '"Avengers Assemble!"',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png')).toEqual({
    badgeIMAX: true,
    country: "США",
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    id: 1000,
    name: "Мстители",
    originalName: "Avengers",
    poster: "https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png",
    tagline: '"Avengers Assemble!"',
    timelineInMinutes: 137,
    year: 2012
  })
})

test('Добавление объектов класса Movie в корзину работает', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1000,
    'Мстители',
    'Avengers',
    true,
    2012,
    'США',
    '"Avengers Assemble!"',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    'https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png'))
  expect(cart.items[0]).toEqual({
    badgeIMAX: true,
    country: "США",
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    id: 1000,
    name: "Мстители",
    originalName: "Avengers",
    poster: "https://raw.githubusercontent.com/netology-code/ajs-homeworks/ajs8/typescript/pic/avengers.png",
    tagline: '"Avengers Assemble!"',
    timelineInMinutes: 137,
    year: 2012
  })
})
