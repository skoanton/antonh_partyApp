import { StyleSheet, Text, View } from "react-native";
import DeckOfCards from "../../components/DeckOfCards";

type RingOfFireProps = {};

export default function RingOfFire({}: RingOfFireProps) {
  return (
    <>
      <View style={style.container}>
        <DeckOfCards />
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
