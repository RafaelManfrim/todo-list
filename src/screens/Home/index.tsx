import 'react-native-get-random-values';
import { v4 as uuidV4 } from 'uuid';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from 'react';

import Logo from "../../components/Logo"
import ClipboardImg from "../../components/Clipboard"

import { styles } from './styles';

interface Task {
  id: string
  title: string
  completed: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskName, setTaskName] = useState('')

  function handleAddNewTask() {
    const newTask: Task = {
      id: uuidV4(),
      title: taskName,
      completed: false
    }

    setTasks(prevState => [...prevState, newTask])
    setTaskName('')
  }

  function handleChangeTaskStatus(id: string) {
    setTasks(prevState => {
      return prevState.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    })
  }

  function handleDeleteTask(id: string) {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent style='light' />
      <View style={styles.headerContainer}>
        <Logo />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddNewTask}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <View style={styles.listHeader}>
          <Text>
            Criadas {tasks.length}
          </Text>
          <Text>
            Concluídas {tasks.filter(task => task.completed).length}
          </Text>
        </View>
        {tasks.length === 0 ? (
          <View style={styles.noTasksInformationContainer}>
            <ClipboardImg />
            <Text style={styles.noTasksInformationTitle}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.noTasksInformationDescription}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  )
}