// AuthScreen.tsx
import { StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../../assets";
import LoginForm from "../components/LoginForm";

const AuthScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, paddingTop: insets.top, paddingLeft: insets.left, paddingBottom: insets.bottom, paddingRight: insets.right }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[Colors.primaryDark, Colors.primaryLight]} style={styles.linearGradient}>
                <LoginForm />
            </LinearGradient>
        </View>
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
