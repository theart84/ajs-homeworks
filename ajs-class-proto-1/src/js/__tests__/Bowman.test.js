import Bowman from '../Bowman';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('Ibrahim', 'Bowman')).toEqual(expectedObject);
});
