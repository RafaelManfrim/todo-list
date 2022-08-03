import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../styles/theme";

function lineHeight(fontSize: number, percentage: number) {
  return (fontSize * percentage / 100)
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: theme.colors.gray700,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    paddingTop: 24 + getStatusBarHeight(),
    paddingBottom: 70
  },
  formContainer: {
    flexDirection: 'row',
    marginTop: -30
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 20,
    borderRadius: 5,
    marginRight: 8,
    fontFamily: theme.fonts.regular
  },
  addButton: {
    backgroundColor: theme.colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    borderRadius: 6
  },
  list: {
    width: '100%',
    justifyContent: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    paddingTop: 32,
    paddingBottom: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray400
  },
  noTasksInformationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 20
  },
  noTasksInformationTitle: {
    fontSize: 14,
    color: theme.colors.gray300,
    marginTop: 16,
    lineHeight: lineHeight(14, 140),
    fontFamily: theme.fonts.bold
  },
  noTasksInformationDescription: {
    fontSize: 14,
    color: theme.colors.gray300,
    lineHeight: lineHeight(14, 140),
    fontFamily: theme.fonts.regular
  },
});
