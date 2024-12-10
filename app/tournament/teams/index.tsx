import { Text, View } from "react-native";
import { useTournamentStore } from "../../../store/tournamentStore";

type TeamsProps = {};

export default function Teams({}: TeamsProps) {
  const { teams } = useTournamentStore();
  return (
    <>
      <View>
        {teams.map((team) => (
          <>
            <Text key={team.name}>{team.name}</Text>
            {team.players.map((player) => (
              <Text key={player}>{player}</Text>
            ))}
          </>
        ))}
      </View>
    </>
  );
}
