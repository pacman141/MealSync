// AuthScreen.tsx
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";
import ScreenContainer from "../../../shared/components/ScreenContainer";

const AuthScreen = () => {
    return (
        <ScreenContainer safeAreaBottom={false}>
            <LoginForm />
        </ScreenContainer>
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
