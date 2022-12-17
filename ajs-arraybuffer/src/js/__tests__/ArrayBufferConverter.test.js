import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Метод load принимает буфер и сохраняет его в свойство container', () => {
  const arrbuf = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrbuf.load(buffer);
  expect(arrbuf.container).toBeInstanceOf(Uint16Array);
});

test('Метод toString раскодирует строку', () => {
  const testString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrbuf = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrbuf.load(buffer);
  expect(arrbuf.toString()).toBe(testString);
});
