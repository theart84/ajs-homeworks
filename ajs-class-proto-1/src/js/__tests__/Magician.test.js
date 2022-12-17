import Magician from '../Magician';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Ibrahim', 'Magician')).toEqual(expectedObject);
});
