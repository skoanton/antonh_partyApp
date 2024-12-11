import { StyleSheet, Text, View } from "react-native";
import Button from "../../../components/Button";

type SettingsPageProps = {};

export default function SettingsPage({}: SettingsPageProps) {
  return (
    <>
      <View style={style.container}>
        <Button
          title="Starta online session"
          handlePress={() => console.log("Starta online session")}
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
    gap: 20,
  },
});
