import { View, Text, Pressable } from "react-native";
import { appStyles } from "../styles/styles";

type HomeScreenProps = {
  onStart: () => void;
};

export default function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <View style={[appStyles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Text style={{ fontSize: 32, marginBottom: 40 }}>Welcome to Square Chat!</Text>
      <Pressable
        onPress={onStart}
        style={{ padding: 20, backgroundColor: "skyblue", borderRadius: 10 }}
      >
        <Text style={{ fontSize: 20 }}>Start Chatting</Text>
      </Pressable>
    </View>
  );
}
