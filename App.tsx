import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

const firstmeeting = (playerName: string) => [
  "","Ow.","...","Nope.","You didn't hear anything.","...","...","What's your name?",`So, ${playerName || "???"}?`,"Nice to meet you I'm a square.","What you think I have a real name?", "Nah, just square.", "Hey you wanna see something cool?","Close your eyes.", "What?", "Nothing happened?", "Fine, I guess I'll close my eyes.", closed, "Look at this!", "It's a bow!", "Do you like it?"]
//

const images = {
    normal: require('./assets/2dsquare.png'),
    threeD: require('./assets/3dsquare.png'),
    bow: require('./assets/bow.png')
}

// const getImageForIndex = (index: number) => {
//   if (index === 17) return images.bow;
//   return images.normal;
// }

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [blackout, setBlackout] = useState(false);
  const [currentImage, setCurrentImage] = useState(images.normal)

  const blackoutTrigger = closed

  const handlePress = () => {
    if (currentIndex < firstmeeting(playerName).length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const operationBlackout = () => {
    setBlackout(true);

    setTimeout(() => {
      setBlackout(false);
    }, 1000);
  };

  // Run blackout
  useEffect(() => {
    if (firstmeeting(playerName)[currentIndex] === blackoutTrigger) {
      operationBlackout();
    }
  }, [currentIndex, playerName]);


  // Change the images
  useEffect(() => {
    if (currentIndex === 17) {
      setCurrentImage(images.bow);
    }
  }, [currentIndex]);

  
  return (
    <View style={styles.container}>
      {blackout ? (
        <View style={styles.blackout} />
      ) : (
        <>
          {/* Pressable square */}
          <Pressable onPress={handlePress}>
            <Image 
              source={currentImage}/>
            {/* <View style={styles.square} /> */}
          </Pressable>

          {/* Dialogue Text */}
          <Text style={styles.dialogue}>{firstmeeting(playerName)[currentIndex]}</Text>
          
          {/* Text Input */}
          {currentIndex === 7 && (
          <TextInput
            style={styles.input}
            placeholder='Enter your name'
            value={playerName}
            onChangeText={setPlayerName}
            // Automatically enters the textinput window
            //Keeping this off for now
            // autoFocus
            /> 
          )}

          {/* Buttons */}
          <Pressable style={styles.button}
          
          
        </>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogue: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: '#fcf6e5ff',
    paddingHorizontal: 8,
    marginBottom: 20,
    borderRadius: 20,
  },
  blackout: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  yesButton: {
    backgroundColor
  }
});



