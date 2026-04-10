import { StyleSheet, View, Text } from "react-native";
import Input from "../../../shared/components/Input";
import ButtonCustom from "../../../shared/components/ButtonCustom";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors, GlobalStyles } from "../../../assets";
import { RegisterFormProps } from "../types/auth.types";

export const RegisterForm = ({onClickLogin, onClickForgotPassword}: RegisterFormProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{ ...GlobalStyles.h1, ...styles.h1 }}>Créer un compte</Text>

                {/* Username */}
                <View style={styles.inputGroup}>
                    <Icon name="account-circle" size={20} color={Colors.text} />
                    <Input placeholder="Pseudo" autoCorrect={false} autoCapitalize="none" textContentType="emailAddress" keyboardType="email-address" />
                </View>

                {/* Email */}
                <View style={styles.inputGroup}>
                    <Icon name="mail" size={20} color={Colors.text} />
                    <Input placeholder="Adresse E-mail" autoCorrect={false} autoCapitalize="none" textContentType="emailAddress" keyboardType="email-address" />
                </View>

                {/* Password */}
                <View style={styles.inputGroup}>
                    <Icon name="password" size={20} color={Colors.text} />
                    <Input placeholder="Votre mot de passe" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} textContentType="password" />
                </View>

                {/* Confirm Password */}
                <View style={{...styles.inputGroup, marginBottom: 10}}>
                    <Icon name="password" size={20} color={Colors.text} />
                    <Input placeholder="Confirmez votre mot de passe" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} textContentType="password" />
                </View>

                <ButtonCustom title="Mot de passe oublié" onPress={onClickForgotPassword} styleButton={styles.btnForgotPassword} />
            </View>

            <View style={styles.bottomContainer}>
                <ButtonCustom title="Créer un compte" type="color" onPress={() => console.log("Créer un compte")} />
                <View style={styles.btnRegisterContainer}>
                    <ButtonCustom title="Se connecter" onPress={onClickLogin} styleText={styles.btnRegisterText} />
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
        marginTop: 50
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
    btnRegisterText: {
        fontWeight: "600",
    },
    h1: {
        textAlign: "center",
        marginBottom: 30,
    },
});
