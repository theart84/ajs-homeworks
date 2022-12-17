export default class Team {
  constructor() {
    this.teams = [
      {
        name: 'Сэр_Ланцелот',
        type: 'Swordsman',
        health: 70,
        level: 1,
        attack: 40,
        defence: 10,
      },

      {
        name: 'Логоваз',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Гендальф',
        type: 'Magician',
        health: 60,
        level: 3,
        attack: 40,
        defence: 10,
      },
      {
        name: 'xxxTrueNagibXxx',
        type: 'Daemon',
        health: 90,
        level: 5,
        attack: 50,
        defence: 10,
      },
    ];
  }

  *[Symbol.iterator]() {
    const { teams } = this;
    for (let value = 0; value < teams.length; value++) {
      yield teams[value];
    }
  }
}
