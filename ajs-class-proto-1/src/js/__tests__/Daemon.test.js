import Daemon from '../Daemon';

test('Проверяем что класс корректно создает объект', () => {
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Ibrahim', 'Daemon')).toEqual(expectedObject);
});
