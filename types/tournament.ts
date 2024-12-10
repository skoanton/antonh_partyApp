export type TournamentType = {
  settings: {
    totalPlayers: number;
    teamSize: number;
    totalGames: number;
    playerNames: string[];
  };
};

export type Team = {
  name: string;
  players: string[];
};

export type Group = {
  name: string;
  teams: Team[];
};

export type Match = {
  homeTeam: Team;
  awayTeam: Team;
  winner?: Team;
};

export type GroupMatch = {
  group: Group;
  matches: Match[];
};
