import {
  Group,
  GroupMatch,
  Match,
  Team,
  TournamentType,
} from "../types/tournament";

export const calculateTournament = (formData: TournamentType) => {
  const { totalPlayers, teamSize, totalGames, playerNames } = formData.settings;

  const shuffledNames = shuffle(playerNames);

  const teams: Team[] = [];
  const totalTeams = Math.floor(totalPlayers / teamSize);
  console.log("totalTeams", totalTeams);

  for (let i = 0; i < totalTeams; i++) {
    teams.push({
      name: `Team ${i + 1}`,
      players: shuffledNames.splice(0, teamSize),
    });
  }

  if (shuffledNames.length > 0) {
    console.log("Extra players", shuffledNames);
    teams[teams.length - 1].players.push(...shuffledNames);
  }

  const playoffMatches = createMatches(teams);
  return { teams, playoffMatches };
};

export const createMatches = (teams: Team[]): Match[] => {
  const shuffledTeams = shuffle(teams);

  const matches: Match[] = [];
  if (shuffledTeams.length % 2 !== 0) {
    shuffledTeams.push({ name: "Bye", players: ["Bye"] });
  }
  for (let i = 0; i < shuffledTeams.length; i += 2) {
    matches.push({
      homeTeam: shuffledTeams[i],
      awayTeam: shuffledTeams[i + 1],
    });
  }

  matches.forEach((match) => {
    if (match.homeTeam.name === "Bye" || match.awayTeam.name === "Bye") {
      match.winner =
        match.homeTeam.name === "Bye" ? match.awayTeam : match.homeTeam;
    }
  });

  return matches;
};

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
