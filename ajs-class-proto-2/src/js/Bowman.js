import Character from './Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.name = name;
    this.attack = 25;
    this.defence = 25;
  }
}
