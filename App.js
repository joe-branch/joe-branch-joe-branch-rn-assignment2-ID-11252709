import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const myName = 'Joseph Acheampong'
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.name}>{myName}</Text></Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  name: {
    fontWeight: 'bold'
  }
});
