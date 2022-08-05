import { Dimensions, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { lineHeight } from "../../functions/lineHeight";
import { theme } from "../../styles/theme";

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
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray100
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
    flex: 1,
  },
  listHeader: {
    flexDirection: 'row',
    paddingTop: 32,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  noTasksInformationContainer: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray400,
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
