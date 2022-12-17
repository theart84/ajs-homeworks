import orderByProps from '../task';

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

test('Функция будет работать, если не передать пропсы', () => {
  expect(() => orderByProps(obj)).not.toThrow();
});

test('Функция должна выдавать корректный результат', () => {
  const template = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(template);
});
