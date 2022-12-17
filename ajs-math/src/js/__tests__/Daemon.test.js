import Daemon from '../Daemon';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    dope: false,
    baseAttack: 10,
    level: 1,
    defence: 40,
    distance: 1,
  };
  expect(new Daemon('John', 'Daemon')).toEqual(expectedObject);
});

test('Геттер корректно расчитывает результат', () => {
  const daemon = new Daemon('John');
  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});

test('Геттер устанавливает значение атаки 0, если при расчете атаки значение стало отрицательным, при значение свойства stoned true', () => {
  const daemon = new Daemon('John');
  daemon.attack = 5;
  daemon.distance = 5;
  daemon.stoned = true;
  expect(daemon.attack).toBe(0);
});
