import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors, GlobalStyles } from "../../../assets";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import ButtonCustom from "../../../shared/components/ButtonCustom";
import { useState } from "react";
import { NamesForm } from "../types/auth.types";

export const FormContainer = () => {
    const insets = useSafeAreaInsets();

    const [formShow, setFormShow] = useState<NamesForm>(null);

    const handlePress = (formName: NamesForm) => {
        setFormShow(formName);
    };

    return (
        <View style={styles.container}>
            <View style={{ ...GlobalStyles.ph, ...styles.btnsContainer }}>
                <ButtonCustom title="Se connecter" type="color" onPress={() => handlePress("login")} />
                <ButtonCustom title="Créer un compte" type="light" onPress={() => handlePress("register")} styleButton={styles.btnRegister} />
                <ButtonCustom title="Mot de passe oublié" onPress={() => handlePress("forgotPassword")} styleButton={styles.btnForgotPassword} />
            </View>

            <View style={{ ...GlobalStyles.ph, ...styles.formContainer, paddingBottom: insets.bottom + 50 }}>
                {formShow === "login" && (
                    <LoginForm onClickRegister={() => handlePress("register")} onClickForgotPassword={() => handlePress("forgotPassword")} />
                )}
                {formShow === "register" && (
                    <RegisterForm onClickLogin={() => handlePress("login")} onClickForgotPassword={() => handlePress("forgotPassword")} />
                )}
                {formShow === "forgotPassword" && (
                    <ForgotPasswordForm onClickLogin={() => handlePress("login")} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    formContainer: {
        backgroundColor: Colors.backgroundDark,
        paddingTop: 20,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        position: "absolute",
        width: "100%",
    },
    btnsContainer: {
        height: "50%",
    },
    btnRegister: {
        alignItems: "center",
        marginVertical: 10,
    },
    btnForgotPassword: {
        alignItems: "center",
        marginTop: 10,
    },
});
