import { StyleSheet, Text, View } from "react-native";
import GameMenuCard from "../../components/GameMenuCard";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <>
      <View style={style.container}>
        <GameMenuCard title="Never have I Ever" path="never-have-i-ever" />
        <GameMenuCard title="Ring Of Fire" path="ring-of-fire" />
        <GameMenuCard title="Cards" path="cards" />
        <GameMenuCard title="Tournament" path="tournament" />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
