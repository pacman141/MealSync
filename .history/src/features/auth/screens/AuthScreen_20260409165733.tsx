// AuthScreen.tsx
import { StyleSheet, Text, TextComponent, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.linearGradient}>
                <TextComponent>Sign in with Facebook</TextComponent>
            </LinearGradient>
        </View>
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
    linearGradient: {},
    text: {
        fontSize: 20,
        color: "#000",
    },
});
