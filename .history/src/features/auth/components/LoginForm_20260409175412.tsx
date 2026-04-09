import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "../../../shared/components/Input";
import { Colors } from "../../../assets";

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Input placeholder="Adresse E-mail"/>
            <Input placeholder="Mot de passe"/>
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
});
