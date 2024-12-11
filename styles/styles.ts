import { StyleSheet } from "react-native";

export const shadows = StyleSheet.create({
  box: {
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
});

export const buttons = StyleSheet.create({
  primary: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignSelf: "center",
  },
  secondary: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignSelf: "center",
  },
  primaryText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  secondaryText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export const inputFields = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    width: 100,
    borderRadius: 5,
    marginVertical: 10,
  },
});
