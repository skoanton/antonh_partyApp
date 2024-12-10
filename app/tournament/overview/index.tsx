import { StyleSheet, Text, View } from "react-native";
import { TournamentType } from "../../../types/tournament";
import { useTournamentStore } from "../../../store/tournamentStore";
import Button from "../../../components/Button";
import { router } from "expo-router";

type OverviewProps = {
  formData: TournamentType;
};

export default function Overview({}: OverviewProps) {
  const { teams, matches } = useTournamentStore();

  return (
    <>
      <View style={style.container}>
        <Button
          title="Lag"
          handlePress={() => router.push("tournament/teams")}
        />
        <Button
          title="Matches"
          handlePress={() => router.push("tournament/matches")}
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
