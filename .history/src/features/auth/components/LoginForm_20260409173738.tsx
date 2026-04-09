import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Colors } from "../../../assets";

const LoginForm = () => {
    return (
        <View>
            <TextInput style={styles.textInput} />
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: Colors.dark,
        width: '100%'
    },
});
