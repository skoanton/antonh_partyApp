import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTournamentStore } from "../../../store/tournamentStore";

type TeamsProps = {};

export default function Teams({}: TeamsProps) {
  const { teams } = useTournamentStore();
  return (
    <>
      <View style={style.container}>
        <ScrollView style={style.scrollView}>
          {teams.map((team, index) => (
            <View
              style={[
                style.teamContainer,
                { backgroundColor: index % 2 === 0 ? "white" : "lightgrey" },
              ]}
            >
              <Text style={style.text} key={team.name}>
                {team.name}
              </Text>
              {team.players.map((player) => (
                <Text style={style.smallText} key={player}>
                  {player}
                </Text>
              ))}
            </View>
          ))}
        </ScrollView>
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
  teamContainer: {
    flex: 1,
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
  smallText: {
    color: "black",
    fontSize: 16,
    fontStyle: "italic",
  },
});
