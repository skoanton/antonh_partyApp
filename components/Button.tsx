import { Text, TouchableOpacity } from "react-native";
import { buttons } from "../styles/styles";

type ButtonProps = {
  title: string;
  handlePress: () => void;
  secondary?: boolean;
};

export default function Button({ title, handlePress, secondary }: ButtonProps) {
  return (
    <>
      <TouchableOpacity
        style={!secondary ? buttons.primary : buttons.secondary}
        onPress={handlePress}
      >
        <Text style={!secondary ? buttons.primaryText : buttons.secondaryText}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
}
