import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

interface TasksInformationProps {
  information: 'created' | 'completed'
  number: number
}

export function TasksInformation({ information, number }: TasksInformationProps) {
  const informationTitle = information === 'created' ? 'Criadas' : 'Concluídas'

  return (
    <View style={styles.container}>
      <Text style={[styles.text, information === 'created' ? styles.blue : styles.purple]}>
        {informationTitle}
      </Text>
      <Text style={styles.textContainer}>{number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    color: theme.colors.blueDark,
    marginRight: 8,
  },
  blue: {
    color: theme.colors.blue,
  },
  purple: {
    color: theme.colors.purple,
  },
  textContainer: {
    alignSelf: 'center',
    backgroundColor: theme.colors.gray400,
    color: theme.colors.gray200,
    fontFamily: theme.fonts.bold,
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
  }
})