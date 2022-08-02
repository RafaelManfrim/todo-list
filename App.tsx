import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [tasks, setTasks] = useState([])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent style='light' />
      <View>
        <Image source={{ uri: './assets/Logo.svg' }}></Image>
      </View>
      <View style={styles.formContainer}>
        <TextInput placeholder="Adicione uma nova tarefa" placeholderTextColor="#808080" style={styles.input} />
        <TouchableOpacity style={styles.addButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 20,
    borderRadius: 5,
    marginRight: 4,
  },
  addButton: {
    backgroundColor: "#1E6F9F",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 6
  }
});
