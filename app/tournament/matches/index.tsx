import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTournamentStore } from "../../../store/tournamentStore";
import Button from "../../../components/Button";
import { Match, Team } from "../../../types/tournament";
import { useState } from "react";
import { create } from "zustand";
import { createMatches } from "../../../utils/calculateTournament";
import { router } from "expo-router";

type MatchesProps = {};

export default function Matches({}: MatchesProps) {
  const { matches, setMatches } = useTournamentStore();
  const [winnerOfTournament, setWinnerOfTournament] = useState<Team | null>(
    null
  );
  const selectWinner = (index: number, team: Team) => {
    const newMatches = [...matches];
    newMatches[index].winner = team;
    setMatches(newMatches);
  };

  const newMatches = () => {
    const winners: Team[] = matches
      .map((match) => match.winner)
      .filter((winner): winner is Team => !!winner);

    if (winners.length === 1) {
      setWinnerOfTournament(winners[0]);
    }
    const newMatches: Match[] = createMatches(winners);
    setMatches(newMatches);
  };

  console.log("matches", matches.length);

  return (
    <>
      <View style={style.container}>
        <ScrollView style={style.scrollView}>
          {matches.map((match, index) => {
            if (!match?.homeTeam || !match?.awayTeam) {
              console.warn(`Match ${index} is missing data.`);
              return null; // Hoppa över matcher med saknad data
            }

            return (
              <View
                key={index}
                style={[
                  style.matchContainer,
                  { backgroundColor: index % 2 === 0 ? "white" : "lightgrey" },
                ]}
              >
                <TouchableOpacity
                  style={[
                    style.teamButton,
                    match.winner?.name === match.homeTeam.name
                      ? style.selected
                      : null,
                  ]}
                  onPress={() => selectWinner(index, match.homeTeam)}
                >
                  <Text style={style.text}>{match.homeTeam.name}</Text>
                </TouchableOpacity>
                <Text style={style.text}>-</Text>
                <TouchableOpacity
                  style={[
                    style.teamButton,
                    match.winner?.name === match.awayTeam.name
                      ? style.selected
                      : null,
                  ]}
                  onPress={() => selectWinner(index, match.awayTeam)}
                >
                  <Text style={style.text}>{match.awayTeam.name}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        {winnerOfTournament ? (
          <>
            <Text style={style.text}>
              The winner of the tournament is {winnerOfTournament.name}
            </Text>
            <Button title="Home" handlePress={() => router.push("/")} />
          </>
        ) : (
          <Button
            title="Next stage"
            handlePress={() => {
              newMatches();
            }}
          />
        )}
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 20,
  },
  matchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  scrollView: {
    backgroundColor: "white",
    marginBottom: 20,
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  teamButton: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  selected: {
    backgroundColor: "lightgreen",
    borderRadius: 5,
  },
});
