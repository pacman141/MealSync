// AuthScreen.tsx
import { StyleSheet, Text, TextComponent, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../../assets";

const AuthScreen = () => {
    return (

            <LinearGradient colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
                <TextComponent>Sign in with Facebook</TextComponent>
            </LinearGradient>

    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    linearGradient: {
      flex: 1,
    },
    text: {
        fontSize: 20,
        color: "#000",
    },
});
