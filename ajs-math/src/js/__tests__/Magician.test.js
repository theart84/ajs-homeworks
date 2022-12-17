import Magician from '../Magician';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'John',
    type: 'Magician',
    health: 100,
    dope: false,
    baseAttack: 10,
    level: 1,
    defence: 40,
    distance: 1,
  };
  expect(new Magician('John', 'Magician')).toEqual(expectedObject);
});

test('Геттер корректно расчитывает результат', () => {
  const mag = new Magician('John');
  mag.attack = 100;
  mag.distance = 2;
  mag.stoned = true;
  expect(mag.attack).toBe(85);
});

test('Геттер устанавливает значение атаки 0, если при расчете атаки значение стало отрицательным, при значение свойства stoned true', () => {
  const mag = new Magician('John');
  mag.attack = 5;
  mag.distance = 5;
  mag.stoned = true;
  expect(mag.attack).toBe(0);
});
