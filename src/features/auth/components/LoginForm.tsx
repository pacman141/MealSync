import { StyleSheet, View } from "react-native";
import Input from "../../../shared/components/Input";
import ButtonCustom from "../../../shared/components/ButtonCustom";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors, GlobalStyles } from "../../../assets";
import { LoginFormProps } from "../types/auth.types";
import { useAppNavigation } from "../../../app/navigation/types/rootNavigator.types";
import TextApp from "../../../shared/components/TextApp";

export const LoginForm = ({ onClickRegister, onClickForgotPassword }: LoginFormProps) => {
    const navigation = useAppNavigation();

    const handleLogin = () => {
        navigation.replace("Main", { screen: "Dashboard" });
    };

    return (
        <View style={styles.container}>
            <View>
                <TextApp style={{ ...GlobalStyles.h1, ...styles.h1 }}>Se connecter</TextApp>

                {/* Email */}
                <View style={styles.inputGroup}>
                    <Icon name="mail" size={20} color={Colors.text} />
                    <Input placeholder="Adresse E-mail" autoCorrect={false} autoCapitalize="none" textContentType="emailAddress" keyboardType="email-address" />
                </View>

                {/* Password */}
                <View style={{ ...styles.inputGroup, marginBottom: 10 }}>
                    <Icon name="password" size={20} color={Colors.text} />
                    <Input placeholder="Mot de passe" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} textContentType="password" />
                </View>

                <ButtonCustom title="Mot de passe oublié" onPress={onClickForgotPassword} styleButton={styles.btnForgotPassword} />
            </View>

            <View style={styles.bottomContainer}>
                <ButtonCustom title="Se connecter" type="color" onPress={handleLogin} />

                <View style={styles.btnRegisterContainer}>
                    <ButtonCustom title="S'inscrire" onPress={onClickRegister} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
    },
    bottomContainer: {
        justifyContent: "center",
        marginTop: 50,
    },
    inputGroup: {
        marginBottom: 20,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 8,
        borderRadius: 15,
    },
    btnForgotPassword: {
        alignItems: "flex-end",
    },
    btnRegisterContainer: {
        marginTop: 10,
        alignItems: "center",
    },
    h1: {
        textAlign: "center",
        marginBottom: 20,
    },
});
