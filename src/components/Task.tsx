import { Text, View } from "react-native";

interface TaskProps {
  title: string
  completed: boolean
}

export function Task({ title, completed }: TaskProps) {
  return (
    <View>
      <View></View>
      <Text>{title}</Text>
      <View></View>
    </View>
  )
}