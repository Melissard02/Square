// App.tsx

import { useEffect, useState } from 'react';
import { Pressable, Text, View, TextInput, Image, Button } from 'react-native';
import dialogueData from "./data/firstmeeting.json";
import { appStyles } from './styles/styles';
import { useBlackout } from './hooks/useBlackout';
import SquareCharacter from './components/SquareCharacter';
import DialogueBox from './components/DialogueBox';

// Bring in images
const images = {
    normal: require('./assets/2dsquare.png'),
    evolved: require('./assets/3dsquare.png'),
    bow: require('./assets/bow.png'),
    yesButton: require('./assets/yesbutton.png'),
    noButton: require('./assets/nobutton.png')
}

// Index for yes/no options
const BUTTON_INDEX = 19;



export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [currentImage, setCurrentImage] = useState(images.normal)
  const [branch, setBranch] = useState<"none" | "yes" | "no">("none");
  const [branchIndex, setBranchIndex] = useState(0);


  const {blackout, triggerBlackout} = useBlackout();

  const handlePress = () => {
    if (currentIndex < dialogueData.dialogue.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

 const getDialogueLine = (index: number, playerName: string) => {
  let line = dialogueData.dialogue[index];

  if (branch === "yes" && dialogueData.dialogue[index + 1]?.yesbow) {
    line = dialogueData.dialogue[index + 1].yesbow[0];
  } else if (branch === "no" && dialogueData.dialogue[index + 1]?.nobow) {
    line = dialogueData.dialogue[index + 1].nobow[0];
  }

  if (line.includes("{playerName}")) {
    line = line.replace("{playerName}", playerName || "???");
  }
  return line;
};


  // Run blackout
  useEffect(() => {
    if (getDialogueLine(currentIndex, playerName) === "Look at this!") {
      triggerBlackout();
    }
  }, [currentIndex, playerName]);



  // Change the images
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
          {/* Pressable square */}
          <SquareCharacter image={currentImage} onPress={handlePress} />

          {/* Dialogue Text */}
          <DialogueBox text={getDialogueLine(currentIndex, playerName)} />
          
          {/* Text Input */}
          {currentIndex === 7 && (
          <TextInput
            style={appStyles.input}
            placeholder='Enter your name'
            value={playerName}
            onChangeText={setPlayerName}
          />
          )}

          {/* Buttons */}
          {currentIndex === BUTTON_INDEX && (
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <Pressable 
              onPress={() => {
                setCurrentImage(images.bow)
                setBranch("yes");
                setCurrentIndex(currentIndex + 1);  
              }}>
              <Image source={images.yesButton} style={{width: 100, height: 40}} />
            </Pressable>

            <Pressable onPress={() => {
              setCurrentImage(images.normal)
              setBranch("no");
              setCurrentIndex(currentIndex + 1);
            }}>
              <Image source={images.noButton} style={{width: 100, height: 40}} />
            </Pressable>
          </View>
          )}
        </>
      )}
    </View>
  );
}