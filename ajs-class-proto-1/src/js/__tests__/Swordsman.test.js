import Swordsman from '../Swordsman';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('Ibrahim', 'Swordsman')).toEqual(expectedObject);
});
