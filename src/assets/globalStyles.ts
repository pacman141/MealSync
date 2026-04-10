import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    h1: {
        fontSize: 24,
        fontWeight: "700",
    },
    ph: {
        paddingHorizontal: 20,
    },
});
