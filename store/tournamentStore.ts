import { create } from "zustand";
import { Match, Team } from "../types/tournament";

type TournamentStore = {
  teams: Team[]; // Lag
  matches: Match[]; // Matcher
  setTeams: (teams: Team[]) => void;
  setMatches: (matches: Match[]) => void;
};

export const useTournamentStore = create<TournamentStore>((set) => ({
  teams: [],
  matches: [],
  setTeams: (teams) => set({ teams }),
  setMatches: (newMatches: Match[]) => set({ matches: newMatches }),
}));
