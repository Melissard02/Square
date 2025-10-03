import { useEffect, useState } from "react";
import { Pressable, View, TextInput, Image } from "react-native";
import dialogueData from "../data/firstmeeting.json";
import { appStyles } from "../styles/styles";
import { useBlackout } from "../hooks/useBlackout";
import SquareCharacter from "./SquareCharacter";
import DialogueBox from "./DialogueBox";

const images = {
  normal: require("../assets/2dsquare.png"),
  evolved: require("../assets/3dsquare.png"),
  bow: require("../assets/bow.png"),
  yesButton: require("../assets/yesbutton.png"),
  noButton: require("../assets/nobutton.png"),
};

const BUTTON_INDEX = 19;

type ChatScreenProps = {
  onFinish: () => void;
};

export default function ChatScreen({ onFinish }: ChatScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [currentImage, setCurrentImage] = useState(images.normal);
  const [branch, setBranch] = useState<"none" | "yes" | "no">("none");
  const [branchIndex, setBranchIndex] = useState(0);

  const { blackout, triggerBlackout } = useBlackout();

  const handlePress = () => {
    if (branch === "none") {
      if (currentIndex < dialogueData.dialogue.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      const branchArray = branch === "yes" ? dialogueData.yesbow : dialogueData.nobow;
      if (branchIndex < branchArray.length - 1) {
        setBranchIndex(branchIndex + 1);
      } else {
        onFinish();
      }
    }
  };

  const getDialogueLine = () => {
    let line = "";

    if (branch === "yes") {
      line = dialogueData.yesbow[branchIndex];
    } else if (branch === "no") {
      line = dialogueData.nobow[branchIndex];
    } else {
      line = dialogueData.dialogue[currentIndex];
    }

    if (line?.includes("{playerName}")) {
      line = line.replace("{playerName}", playerName || "???");
    }
    return line;
  };

  useEffect(() => {
    if (getDialogueLine() === "Look at this!") {
      triggerBlackout();
    }
  }, [currentIndex, branchIndex, branch, playerName]);

  useEffect(() => {
    if (currentIndex === 17) {
      setCurrentImage(images.bow);
    }
  }, [currentIndex]);

  return (
    <View style={appStyles.container}>
      {blackout ? (
        <View style={appStyles.blackout} />
      ) : (
        <>
          <SquareCharacter image={currentImage} onPress={handlePress} />
          <DialogueBox text={getDialogueLine()} />

          {currentIndex === 7 && branch === "none" && (
            <TextInput
              style={appStyles.input}
              placeholder="Enter your name"
              value={playerName}
              onChangeText={setPlayerName}
            />
          )}

          {currentIndex === BUTTON_INDEX && branch === "none" && (
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Pressable
                onPress={() => {
                  setCurrentImage(images.bow);
                  setBranch("yes");
                  setBranchIndex(0);
                }}
              >
                <Image source={images.yesButton} style={{ width: 100, height: 40 }} />
              </Pressable>

              <Pressable
                onPress={() => {
                  setCurrentImage(images.normal);
                  setBranch("no");
                  setBranchIndex(0);
                }}
              >
                <Image source={images.noButton} style={{ width: 100, height: 40 }} />
              </Pressable>
            </View>
          )}
        </>
      )}
    </View>
  );
}
