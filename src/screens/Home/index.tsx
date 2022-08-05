import 'react-native-get-random-values';
import { v4 as uuidV4 } from 'uuid';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from 'react';

import Logo from "../../components/Logo"
import ClipboardImg from "../../components/Clipboard"

import { styles } from './styles';
import { TasksInformation } from '../../components/TasksInformation';
import { Task } from '../../components/Task';

interface Task {
  id: string
  title: string
  completed: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskName, setTaskName] = useState('')

  function handleAddNewTask() {
    if (taskName.length < 1) {
      return Alert.alert('Oops', 'Por favor digite o nome da tarefa.')
    }

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

  useEffect(() => {
    AsyncStorage.getItem('tasks').then(tasks => {
      if (tasks) {
        setTasks(JSON.parse(tasks))
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

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
          <TasksInformation information='created' number={tasks.length} />
          <TasksInformation information='completed' number={tasks.filter(task => task.completed).length} />
        </View>
        {tasks.length === 0 ? (
          <View style={styles.noTasksInformationContainer}>
            <ClipboardImg />
            <Text style={styles.noTasksInformationTitle}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.noTasksInformationDescription}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        ) : (
          <ScrollView>
            {tasks.map(task => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                onChangeStatus={handleChangeTaskStatus}
                onDelete={handleDeleteTask}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  )
}