import ErrorRepository from '../ErrorRepository';

test('Метод translate должен выдавать текст ошибки, если ему передать код', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errorContainer.set('100', 'Персонаж уже существует');
  expect(errorRepository.translate(100)).toBe('Персонаж уже существует');
});

test('Метод translate должен выдавать "Unknown error", если такой ошибки нет коллекции', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errorContainer.set('100', 'Персонаж уже существует');
  expect(errorRepository.translate(104)).toBe('Unknown error');
});
