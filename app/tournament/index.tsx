import { Text, View, StyleSheet } from "react-native";
import TournamentSettings from "../../components/TournamentSettings";

type TournamentPageProps = {};

export default function TournamentPage({}: TournamentPageProps) {
  return (
    <>
      <View style={style.container}>
        <TournamentSettings />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
