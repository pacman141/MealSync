import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "../../../shared/components/Input";
import { Colors } from "../../../assets";
import ButtonCustom from "../../../shared/components/ButtonCustom";

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input placeholder="Adresse E-mail" style={styles.input} />
                <Input placeholder="Mot de passe" style={styles.input}/>
                <ButtonCustom title="Se connecter" type="linear" onPress={() => console.log("Se connecter")} />
                <ButtonCustom title="Mot de passe oublié" onPress={() => console.log("Mot de passe oublié")} />
                <ButtonCustom title="S'inscrire" onPress={() => console.log("S'inscrire")} />
            </View>
        </View>
    );
};

export default LoginForm;

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
