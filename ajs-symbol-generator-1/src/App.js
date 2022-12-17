import Team from './js/Team';

const newTeam = new Team();
for (const newTeamElement of newTeam) {
  console.log(newTeamElement);
}
console.log(newTeam);
console.log([...newTeam]);
