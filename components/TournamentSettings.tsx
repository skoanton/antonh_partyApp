import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { buttons, inputFields } from "../styles/styles";
import PlayerNamesModal from "./PlayerNamesModal";
import Button from "./Button";
import { TournamentType } from "../types/tournament";
import { calculateTournament } from "../utils/calculateTournament";
import { useTournamentStore } from "../store/tournamentStore";
import { router } from "expo-router";
type TournamentSettingsProps = {};

export default function TournamentSettings({}: TournamentSettingsProps) {
  const [teamSize, setTeamSize] = useState<number>(1);
  const [totalGames, setTotalGames] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [playerNames, setPlayerNames] = useState<string[]>([]);
  const { setTeams, setMatches } = useTournamentStore();
  const handleSubmit = () => {
    if (playerNames?.length <= 0 || teamSize <= 0 || totalGames <= 0) {
      Alert.alert("Felaktiga värden", "Alla värden måste vara större än noll!");
      return;
    }
    const dataForm: TournamentType = {
      settings: {
        totalPlayers: playerNames?.length || 0,
        teamSize: teamSize,
        totalGames: totalGames,
        playerNames: playerNames || [],
      },
    };
    console.log(dataForm);
    const { teams, playoffMatches } = calculateTournament(dataForm);
    console.log(teams);
    if (teams && playoffMatches) {
      setTeams(teams);
      setMatches(playoffMatches);
      router.push("tournament/overview");
    } else {
      Alert.alert("Något gick fel när du försökte skapa turneringen");
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <View>
        <Text style={style.text}>Turneringsinställningar</Text>
        <Button
          title="Lägg till spelare"
          handlePress={handleModal}
          secondary={true}
        />
        <View style={style.inputForm}>
          <Text style={style.label}>Lagstorlek: </Text>
          <TextInput
            value={teamSize.toString()}
            onChangeText={(e) => setTeamSize(Number(e))}
            keyboardType="numeric"
            style={inputFields.inputField}
          />
        </View>
        <View style={style.inputForm}>
          <Text style={style.label}>Antal möten per lag: </Text>
          <TextInput
            value={totalGames.toString()}
            onChangeText={(e) => setTotalGames(Number(e))}
            keyboardType="numeric"
            style={inputFields.inputField}
          />
        </View>

        <Button title={"Skapa tunering"} handlePress={handleSubmit} />
      </View>
      <PlayerNamesModal
        setNames={setPlayerNames}
        showModal={showModal}
        onClose={handleModal}
      />
    </>
  );
}

const style = StyleSheet.create({
  inputForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
  },
});
