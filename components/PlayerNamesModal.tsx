import { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { inputFields } from "../styles/styles";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "./Button";

type PlayerNamesModalProps = {
  setNames: (names: string[]) => void;
  showModal: boolean;
  onClose: () => void;
};

export default function PlayerNamesModal({
  setNames,
  showModal,
  onClose,
}: PlayerNamesModalProps) {
  const [playerNames, setPlayerNames] = useState<string[]>([""]);

  const handleSubmit = () => {
    if (playerNames.some((name) => name === "")) {
      alert("All fields must be filled in");
    } else {
      setNames(playerNames);
      onClose();
    }
  };

  const addPlayer = () => {
    setPlayerNames([...playerNames, ""]);
  };

  const updatePlayerName = (index: number, value: string) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = value;
    setPlayerNames(updatedNames);
  };

  return (
    <Modal animationType="slide" visible={showModal}>
      <View style={style.modalContent}>
        <View style={style.titleContainer}>
          <Text>Enter player names</Text>
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" size={22} />
          </TouchableOpacity>
        </View>

        <ScrollView style={style.scrollView}>
          {playerNames.map((name, index) => (
            <TextInput
              style={[inputFields.inputField, { width: "100%" }]}
              key={index}
              value={name}
              onChangeText={(e) => updatePlayerName(index, e)}
            />
          ))}
        </ScrollView>

        <View style={style.buttonContainer}>
          <Button title="+" handlePress={addPlayer} secondary={true} />
          <Button title="Save" handlePress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  closeButton: {
    marginLeft: "auto",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    gap: 10,
    marginTop: "auto",
  },
  scrollView: {
    marginBottom: 20,
    height: "50%",
  },
});
