export default class ArrayBufferConverter {
  constructor() {
    this.container = null;
  }

  load(data) {
    this.container = new Uint16Array(data);
  }

  toString() {
    return [...this.container].map((symbol) => String.fromCharCode(symbol)).join('');
  }
}
