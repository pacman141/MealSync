// AuthScreen.tsx
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../../assets";

const AuthScreen = () => {
    return (
        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 1, y: 0}} colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
            <Text>Sign in with Facebook</Text>
        </LinearGradient>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: "#000",
    },
});
