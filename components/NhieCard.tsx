import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useEffect, useState } from "react";
import { nhiePromptsType } from "../types/nhiePromptsType";
import { shadows } from "../styles/styles";
import { fetchAllPrompts } from "../api/nhie";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
type NhieCardProps = {};

export default function NhieCard({}: NhieCardProps) {
  const [nhiePrompts, setNhiePrompts] = useState<nhiePromptsType[]>([]);
  const [question, setQuestion] = useState<nhiePromptsType | null>(null);
  useEffect(() => {
    const getAllPrompts = async () => {
      const response = await fetchAllPrompts();
      if (response) {
        setNhiePrompts(response);
        setRandomQuestion();
      } else {
        console.log("Error");
      }
    };
    getAllPrompts();
  }, []);

  const setRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * nhiePrompts.length);
    setQuestion(nhiePrompts[randomIndex]);
  };

  return (
    <>
      <TouchableOpacity
        style={[style.container, shadows.box]}
        onPress={() => {
          setRandomQuestion();
        }}
      >
        <View style={style.innerContainer}>
          {question ? (
            <>
              <Text style={style.bigText}>Never have I ever..</Text>
              <Text style={style.questionText}>{question.prompt}</Text>
            </>
          ) : (
            <Text style={style.questionText}>Press to play</Text>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  bigText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginBottom: "auto",
  },
  questionText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: "auto",
  },
});
