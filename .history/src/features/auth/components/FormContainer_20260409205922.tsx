import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../../assets";
import LoginForm from "./LoginForm";

const FormContainer = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
                ...styles.container,
                paddingBottom: insets.bottom,
            }}>
            <View style={styles.form}>
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
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
    },
    input: {
        marginBottom: 20,
    },
});
