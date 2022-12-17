export default class ErrorRepository {
  constructor() {
    this.errorContainer = new Map();
  }

  translate(code) {
    const error = this.errorContainer.get(String(code));
    if (error) {
      return error;
    }
    return `Unknown error`;
  }
}
