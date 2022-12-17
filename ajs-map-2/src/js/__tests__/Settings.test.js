import Settings from '../Settings';

test('Геттер возвращает корректный Map', () => {
  const settings = new Settings(['theme', 'light'], ['difficulty', 'hard']);
  const template = [
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'hard'],
  ];
  expect([...settings.setting]).toEqual(template);
});
