export default class Settings {
  constructor(...userSettings) {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map(userSettings);
  }

  get setting() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
