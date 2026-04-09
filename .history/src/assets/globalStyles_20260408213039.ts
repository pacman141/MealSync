import { StyleSheet } from "react-native";
export { Colors } from './globalStyles';

export const GlobalStyles = StyleSheet.create({
      container: {
    flex: 1,
    padding: Spacing.md,
    backgroundColor: Colors.background,
  },
  title: {
    ...Typography.h1,
    color: Colors.text,
  },
})