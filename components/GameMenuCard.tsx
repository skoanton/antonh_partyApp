import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { shadows } from "../styles/styles";
type GameMenuCardProps = {
  title: string;
  path: string;
};

export default function GameMenuCard({ title, path }: GameMenuCardProps) {
  const onPress = () => {
    router.push(path);
  };

  return (
    <>
      <TouchableOpacity
        style={[style.button, shadows.box]}
        onPress={() => onPress()}
      >
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
