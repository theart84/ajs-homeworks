import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.dope = false;
    this.distance = 1;
  }

  get stoned() {
    return this.dope;
  }

  set stoned(value) {
    this.dope = value;
  }

  get attack() {
    const ratioPower = (100 - (this.distance - 1) * 10) / 100;
    if (this.stoned) {
      const result = Math.floor(this.baseAttack * ratioPower - Math.log2(this.distance) * 5);
      return result > 0 ? result : 0;
    }
    return this.baseAttack * ratioPower;
  }

  set attack(value) {
    this.baseAttack = value;
  }
}
