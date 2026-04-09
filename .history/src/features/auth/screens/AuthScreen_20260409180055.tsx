// AuthScreen.tsx
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../../assets";
import LoginForm from "../components/LoginForm";
import ScreenContainer from "../../../shared/components/ScreenContainer";

const AuthScreen = () => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
            <ScreenContainer>
                <LoginForm />
            </ScreenContainer>
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
