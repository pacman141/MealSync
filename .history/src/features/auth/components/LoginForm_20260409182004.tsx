import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "../../../shared/components/Input";
import { Colors } from "../../../assets";

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Input placeholder="Adresse E-mail" style={styles.input} />
                <Input placeholder="Mot de passe" />
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
        marginBottom: 10,
    },
});
