// AuthScreen.tsx
import { StyleSheet, View } from "react-native";
import ScreenContainer from "../../../shared/components/ScreenContainer";
import FormContainer from "../components/FormContainer";

const AuthScreen = () => {
    return (
        <ScreenContainer safeAreaBottom={false}>
            <FormContainer />
        </ScreenContainer>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({});
