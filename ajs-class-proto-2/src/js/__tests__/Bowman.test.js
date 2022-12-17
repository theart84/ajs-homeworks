import Bowman from '../Bowman';

test('Класс должен корректно создавать объект', () => {
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

test('Метод levelUp должен выбросить ошибку если health равно 0', () => {
  const testBowman = new Bowman('Ibrahim', 'Bowman');
  testBowman.health = 0;
  expect(() => testBowman.levelUp()).toThrowError('Нельзя повысить уровень умершего');
});

test('Метод levelUp должен повышать level на 1, attack и defence на 20%', () => {
  const testBowman = new Bowman('Ibrahim', 'Bowman');
  testBowman.levelUp();
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(testBowman).toEqual(expectedObject);
});

test('Метод damage не должен изменять значение health, если health равно 0', () => {
  const testBowman = new Bowman('Ibrahim', 'Bowman');
  testBowman.health = 0;
  const expectedObject = {
    name: 'Ibrahim',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };
  testBowman.damage(50);
  expect(testBowman).toEqual(expectedObject);
});

test('Метод damage должен корректно изменять значение health', () => {
  const testBowman = new Bowman('Ibrahim', 'Bowman');
  const expectedHealth = 62.5;
  testBowman.damage(50);
  expect(testBowman.health).toEqual(expectedHealth);
});

test('Метод damage должен устанавливать health в 0, если health стал отрицательным', () => {
  const testBowman = new Bowman('Ibrahim', 'Bowman');
  const expectedHealth = 0;
  testBowman.damage(150);
  expect(testBowman.health).toEqual(expectedHealth);
});
