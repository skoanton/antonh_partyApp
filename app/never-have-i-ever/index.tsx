import { StyleSheet, Text, View } from "react-native";
import NhieCard from "../../components/NhieCard";

type NeverHaveIEverProps = {};

export default function NeverHaveIEver({}: NeverHaveIEverProps) {
  return (
    <>
      <View style={style.container}>
        <NhieCard />
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
