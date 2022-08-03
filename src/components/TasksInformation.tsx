import { Text, View } from "react-native";

interface TasksInformationProps {
  information: 'created' | 'completed'
  number: number
}

export function TasksInformation({ information, number }: TasksInformationProps) {
  const informationTitle = information === 'created' ? 'Criadas' : 'Concluídas'

  return (
    <View>
      <Text>{informationTitle}</Text>
      <Text>{number}</Text>
    </View>
  )
}