// styles/styles.tsx
import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
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
    backgroundColor: '#f1f1f1ff',
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
    width: 100,
    height: 40,
    backgroundColor: 'green',
    color: 'white'
  },
  noButton: {
    width: 100,
    height: 40,
    backgroundColor: 'red',
    color: 'white'
  }
});