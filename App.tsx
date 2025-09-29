import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

const firstmeeting = (playerName: string) => [
  "","Ow.","...","Nope.","You didn't hear anything.","...","...","What's your name?",`So, ${playerName || "???"}?`,"Nice to meet you I'm a square.","What you think I have a real name?", "Nah, just square.", "Hey you wanna see something cool?","Close your eyes.", "What?", "Nothing happened?", "Fine, I guess I'll close my eyes.", "Are they closed?", "Look at this!"]

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [blackout, setBlackout] = useState(false);

  const handlePress = () => {
    if (currentIndex < firstmeeting(playerName).length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const blackoutTrigger = "Are they closed?"
  const operationBlackout = () => {
    setBlackout(true);

    setTimeout(() => {
      setBlackout(false);
    }, 10);
  };

  if (!blackout && firstmeeting(playerName)[currentIndex] === blackoutTrigger) {
    operationBlackout();
  }
  
  return (
    <View style={styles.container}>
      {blackout ? (
        <View style={styles.blackout} />
      ) : (
        <>
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
          
          {/* Pressable square */}
          <Pressable onPress={handlePress}>
            <View style={styles.square} />
          </Pressable>
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
    textAlign: 'center'
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    marginTop: 20,
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
  }
});



