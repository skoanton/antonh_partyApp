import { StyleSheet, Text, View } from "react-native";
import DeckOfCards from "../../components/DeckOfCards";

type CardsPageProps = {};

export default function CardsPage({}: CardsPageProps) {
  return (
    <>
      <View style={style.container}>
        <DeckOfCards normal={true} />
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
