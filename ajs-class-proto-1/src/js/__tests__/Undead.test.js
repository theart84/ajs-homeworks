import Undead from '../Undead';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('Ibrahim', 'Undead')).toEqual(expectedObject);
});
