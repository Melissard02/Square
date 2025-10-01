// components/dialogueBox.tsx
import { Text } from "react-native";
import { appStyles } from '../styles/styles';

export default function DialogueBox({text}: {text: string}) {
    return <Text style={appStyles.dialogue}>{text}</Text> 
}