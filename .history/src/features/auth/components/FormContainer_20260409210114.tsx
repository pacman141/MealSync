import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../../assets";
import LoginForm from "./LoginForm";

const FormContainer = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={{ ...styles.form, paddingBottom: insets.bottom }}>
                <LoginForm />
            </View>
        </View>
    );
};

export default FormContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    form: {
        backgroundColor: Colors.backgroundDark,
        padding: 20,
        paddingHorizontal: 20,
        borderTopStartRadius: 30,
        borderTopEndRadius: 20,
        height: "60%",
    },
    input: {
        marginBottom: 20,
    },
});
