import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const dialogueDay1 = ["Ow.","...","Nope.","You didn't hear anything.","...","...","Hey, wait's your name?","{name}, huh. Nice to meet you I'm a square.","What you think I have a real name? Nah, just square.","Listen if you come back tomorrow, I'll show you something cool."]

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = () => {
    if (currentIndex < dialogueDay1.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Dialogue Text */}
      <Text style={styles.dialogue}>{dialogueDay1[currentIndex]}</Text>
      
      {/* Pressable square */}
      <Pressable onPress={handlePress}>
        <View style={styles.square} />
      </Pressable>
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
});

function MySquare() {
  return (
    <Pressable>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <View style={{
      width: 100,
      height: 100,
      backgroundColor: 'orange',
      alignItems: 'center'
      }} />
      </View>
    </Pressable>
  )
}



