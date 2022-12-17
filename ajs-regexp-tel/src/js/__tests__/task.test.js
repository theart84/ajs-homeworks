import validatePhone from '../task';

test('Функция должна возвращать корректный номер', () => {
  expect(validatePhone('8 (927) 000-00-00')).toBe('+79270000000');
  expect(validatePhone('+7 960 000 00 00')).toBe('+79600000000');
  expect(validatePhone('+86 000 000 0000')).toBe('+860000000000');
});
