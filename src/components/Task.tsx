import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../styles/theme";
import { lineHeight } from "../functions/lineHeight";

interface TaskProps {
  id: string;
  title: string
  completed: boolean
  onChangeStatus: (id: string) => void
  onDelete: (id: string) => void
}

export function Task({ id, title, completed, onChangeStatus, onDelete }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => onChangeStatus(id)}>
        {!completed ? (
          <View style={styles.taskNotCompleted}></View>
        ) : (
          <View style={styles.taskCompleted}>
            <AntDesign name="check" size={12} color={theme.colors.gray100} />
          </View>
        )}
      </TouchableWithoutFeedback>
      <Text style={[styles.title, completed && styles.completedTitle]}>{title}</Text>
      <TouchableWithoutFeedback style={styles.deleteButton} onPress={() => onDelete(id)}>
        <AntDesign name="delete" size={22} color={theme.colors.gray300} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.gray500,
    padding: 12,
    borderRadius: 8,
    borderColor: theme.colors.gray400,
    borderWidth: 1,
    marginBottom: 10
  },
  taskNotCompleted: {
    borderColor: theme.colors.blue,
    borderWidth: 1,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  taskCompleted: {
    backgroundColor: theme.colors.purpleDark,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    lineHeight: lineHeight(14, 140),
    color: theme.colors.gray100,
    flex: 1,
    paddingHorizontal: 12
  },
  completedTitle: {
    color: theme.colors.gray300,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    padding: 4,
    borderRadius: 4,
  }
})