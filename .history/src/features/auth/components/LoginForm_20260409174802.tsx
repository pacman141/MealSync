import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Input from "../../../shared/components/Input";

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Input />
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: "100%",
        height: 50,
    },
});
